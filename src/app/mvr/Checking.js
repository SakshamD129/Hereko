async function Checking(value) {
    const client = await clientPromise;
    const db = client.db('sample_mflix');
    const usersCollection = db.collection('users');
    const re = usersCollection.find({ name: value }).toArray();
    return re;
}

export default Checking
