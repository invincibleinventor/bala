'use client';

import Link from 'next/link';

export default function Contact() {
  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    try {
      const response = await fetch('/api/contact', {
        method: 'post',
        body: formData,
      });

      if (!response.ok) {
        console.log('falling over');
        throw new Error(`response status: ${response.status}`);
      }
      const responseData = await response.json();
      console.log(responseData['message']);

      alert('Message successfully sent');
    } catch (err) {
      console.error(err);
      alert('Error, please try resubmitting the form');
    }
  }

  return (
    <main className="flex flex-col items-center">
      <form onSubmit={handleSubmit} className="px-4 mt-8 mb-2 space-y-4 w-80 max-w-screen-lg sm:w-96">
        <div className="flex flex-col mb-4 w-500">
          <label htmlFor="form-name" className="mb-2 text-sm text-neutral-400">
            Name:{' '}
          </label>
          <input
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
            className="px-5 py-3 mb-6 text-sm text-white border outline-none bg-neutral-900 border-neutral-700"
          />

          <label htmlFor="form-email" className="mb-2 text-sm text-neutral-400">
            Email:
          </label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="px-5 py-3 mb-6 text-sm text-white border outline-none bg-neutral-900 border-neutral-700"
          />

          <label htmlFor="form-message" className="mb-2 text-sm text-neutral-400">
            {' '}
            Message:{' '}
          </label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className="px-5 py-3 mb-0 text-sm text-white border outline-none bg-neutral-900 border-neutral-700"
          />
        </div>
        <button
          className="px-6 py-3 mx-auto w-full text-sm font-medium text-white bg-blue-500"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
