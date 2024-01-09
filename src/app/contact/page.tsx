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
      <form onSubmit={handleSubmit} className="space-y-4 mt-8 mb-2 w-80 mx-4 max-w-screen-lg sm:w-96">
        <div className="mb-4 flex flex-col w-500">
          <label htmlFor="form-name" className="mb-2  text-neutral-400 text-sm">
            Name{' '}
          </label>
          <input
            id="form-name"
            autoComplete="name"
            maxLength={50}
            name="name"
            className="text-white mb-6 bg-neutral-900 border border-neutral-700 px-5 py-3 text-sm outline-none"
          />

          <label htmlFor="form-email" className="mb-2  text-neutral-400 text-sm">
            Email:
          </label>
          <input
            id="form-email"
            required
            autoComplete="email"
            maxLength={80}
            name="email"
            type="email"
            className="text-white mb-6 bg-neutral-900 border border-neutral-700 px-5 py-3 text-sm outline-none"
          />

          <label htmlFor="form-message" className="mb-2  text-neutral-400 text-sm">
            {' '}
            Message:{' '}
          </label>
          <textarea
            id="form-message"
            required
            name="message"
            rows={5}
            className="text-white mb-0 bg-neutral-900 border border-neutral-700 px-5 py-3 text-sm outline-none"
          />
        </div>
        <button
          className="px-6 py-3 font-medium text-sm text-white mx-auto w-full bg-blue-600"
          type="submit"
        >
          Send
        </button>
      </form>
    </main>
  );
}
