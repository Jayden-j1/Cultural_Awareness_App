export default function Greeting({bundjalungGreeting, englishGreeting}) {
    return (
        <>
        <section className="flex flex-col justify-center items-center w-full h-screen">
            <h1 className="text-center w-full text-9xl mb-5">{bundjalungGreeting}</h1>
            <h2 className="text-center w-full text-7xl">{englishGreeting}</h2>
        </section>
        </>
    );
}