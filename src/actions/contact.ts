'use server';
import { z } from 'zod';
import nodemailer, { TransportOptions } from 'nodemailer';
import { google } from 'googleapis';

const OAuth2 = google.auth.OAuth2;

const createTransporter = async () => {
	const oauth2Client = new OAuth2(
		process.env.CLIENT_ID,
		process.env.CLIENT_SECRET,
		process.env.REDIRECT_URI
	);

	oauth2Client.setCredentials({
		refresh_token: process.env.REFRESH_TOKEN,
	});

	const accessToken = await new Promise((resolve, reject) => {
		oauth2Client.getAccessToken((err, token) => {
			if (err) {
				reject('Failed to create access token :(');
			}
			resolve(token);
		});
	});

	const transporter = nodemailer.createTransport({
		service: 'gmail',
		auth: {
			type: 'OAuth2',
			user: process.env.EMAIL,
			accessToken,
			clientId: process.env.CLIENT_ID,
			clientSecret: process.env.CLIENT_SECRET,
			refreshToken: process.env.REFRESH_TOKEN,
		},
	} as TransportOptions);

	return transporter;
};

const contactFormSchema = z.object({
	name: z
		.string()
		.min(4)
		.regex(/[a-zA-Z]/, {
			message: 'Name should only contain letters',
		}),
	email: z.string().email(),
	message: z.string().min(20),
});

interface ContactFormState {
	success: boolean;
	errors: {
		name?: string[];
		message?: string[];
		email?: string[];
		_form?: string[];
	};
}

export async function submitContactForm(
	formState: ContactFormState,
	formData: FormData
): Promise<ContactFormState> {
	const { data, success, error } = contactFormSchema.safeParse({
		name: formData.get('name'),
		email: formData.get('email'),
		message: formData.get('message'),
	});

	if (!success) {
		return {
			errors: error.flatten().fieldErrors,
			success: false,
		};
	}

	const transporter = await createTransporter();

	await transporter.sendMail({
		from: data.email,
		to: 'rishabh0211@gmail.com',
		subject: `Query Mail from Portfolio: ${data.name}`,
		text: data.message,
	});
	return {
		errors: {},
		success: true,
	};
}
