import { stage } from '@/utils/GeneralUtils';
import { BACKEND_URL } from '@/utils/VercelEnv';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { fingerprint } = await request.json();
    const response = await fetch(`${BACKEND_URL}/${stage()}/user/visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ fingerprint: fingerprint.toString() }),
    });

    const data = await response.json();
    console.log(`User visit from ${fingerprint}, login response: `, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending to third party: ', error);
    return NextResponse.json({ success: false });
  }

}
