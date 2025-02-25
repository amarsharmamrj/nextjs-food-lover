export default async function Post({ params }) {
    const { slug } = await params
    return (
        <p>Posts: <b>{slug}</b></p>
    )
} 