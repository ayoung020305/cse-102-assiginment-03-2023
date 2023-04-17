import Link from 'next/link';
import dynamic from 'next/dynamic';

const Sketch = dynamic(() => import('./CircleCollision'), {
    ssr: false,
});

export default function FirstPost() {
    return (
        <>
            <h1>LATEST UPDATE</h1>
            <h2>
                why skxkskwldksgsmsrjdi
                <br />
                <br />
                <Link href="/">Back to home</Link>
            </h2>
            <Sketch />
        </>
    );
}
