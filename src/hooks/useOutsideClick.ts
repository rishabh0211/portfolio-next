import { useEffect, useRef } from 'react';

const useOutsideClick = (callback: Function) => {
	const ref = useRef<HTMLUListElement>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent | TouchEvent) => {
			if (ref && ref.current && !ref.current.contains(event.target as Node)) {
				callback();
			}
		};

		document.addEventListener('mouseup', handleClickOutside);
		document.addEventListener('touchend', handleClickOutside);

		return () => {
			document.removeEventListener('mouseup', handleClickOutside);
			document.removeEventListener('touchend', handleClickOutside);
		};
	}, [callback]);

	return ref;
};

export default useOutsideClick;
