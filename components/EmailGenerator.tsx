'use client';

import { useEffect, useState } from 'react';

const EmailGenerator = () => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // ユーザー名を 'nnnn' に変更
    const user = 'nnnn';
    const domain = 'uottawa.ca';
    const at = '\u0040'; // Unicode for @
    const emailAddress = `${user}${at}${domain}`;
    setEmail(emailAddress);
  }, []);

  if (!email) {
    // クライアントでレンダリングされるまで何も表示しないか、ローディング表示
    return null; 
  }

  return (
    <p className="text-black/80">
      {email}
    </p>
  );
};

export default EmailGenerator; 