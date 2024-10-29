import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('learnitabDatabase');
    const categories = ['internship', 'competitions', 'scholarships', 'volunteers', 'events', 'mentors'];
    let allData: { [key: string]: any[] } = {};

    for (let category of categories) {
      const collection = db.collection(category);
      const posts = await collection.find({}).toArray();
      allData[category] = posts;
    }

    console.log('Fetched data:', allData); // Debug log
    return NextResponse.json({ data: allData });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}