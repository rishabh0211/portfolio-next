'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { submitContactForm } from '@/actions/contact';
import { Label } from './ui/label';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { useEffect, useRef } from 'react';

const ContactForm = () => {
	const [formState, action] = useFormState(submitContactForm, {
		errors: {},
		success: false,
	});
	const ref = useRef<HTMLFormElement>(null);
	const toaster = useToast();

	useEffect(() => {
		if (formState.success) {
			toaster.toast({
				title: "Thank you for contacting! I'll get in touch soon.",
				className: 'bg-green-800 font-light text-foreground',
			});
			ref.current?.reset();
		}
	}, [ref, formState]);

	return (
		<form
			action={action}
			ref={ref}
			className='mt-16 p-6 bg-background_dark md:flex-grow md:mt-0'
		>
			<div>
				<Label htmlFor='name'>Name</Label>
				<Input
					id='name'
					type='text'
					name='name'
					placeholder='Your name'
					className='mt-1'
				/>
				{formState.errors.name && (
					<p className='text-sm mt-2 text-red-400'>{formState.errors.name.join(', ')}</p>
				)}
			</div>
			<div className='mt-4'>
				<Label htmlFor='email'>E-mail</Label>
				<Input
					id='email'
					type='email'
					name='email'
					placeholder='Your email'
					className='mt-1'
				/>
				{formState.errors.email && (
					<p className='text-sm mt-2 text-red-400'>{formState.errors.email.join(', ')}</p>
				)}
			</div>
			<div className='mt-4'>
				<Label htmlFor='message'>Message</Label>
				<Textarea
					id='message'
					name='message'
					placeholder='Your Message/Query'
					className='mt-1 resize-none'
					rows={4}
				/>
				{formState.errors.message && (
					<p className='text-sm mt-2 text-red-400'>
						{formState.errors.message.join(', ')}
					</p>
				)}
			</div>
			<SubmitButton />
		</form>
	);
};

export default ContactForm;

const SubmitButton = () => {
	const { pending } = useFormStatus();
	return (
		<Button
			type='submit'
			className='mt-4 w-full rounded-md'
			aria-disabled={pending}
			disabled={pending}
		>
			{pending ? 'Submitting...' : 'Submit'}
		</Button>
	);
};
