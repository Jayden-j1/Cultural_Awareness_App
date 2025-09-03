import Greeting from "./Section1";
import Language from "./Section2";


export default function MainContent() {
    return (
        <>
         <main className="flex flex-col justify-center">
          <Greeting bundjalungGreeting="JINGI WALLA" englishGreeting="WELCOME" />
          <Language />
         </main>
        </>
    );
}