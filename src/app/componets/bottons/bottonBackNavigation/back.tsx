'use client';
import './style.module.scss';
import { useRouter } from 'next/navigation';
import { IoMdArrowRoundBack } from 'react-icons/io';

export default function BackButton() {
  const router = useRouter();

  return (
    <button onClick={() => router.back()} className="buttomBack">
      <IoMdArrowRoundBack />
      <p>Back</p>
    </button>
  );
}
