import React from "react";

const Questions = () => {
    return (
        <div className="my-container max-w-3xl section-gap flex flex-col gap-3 md:gap-5">
            <h1 className="text-center mb-3 heading-text">Blog Questions</h1>
            <div className="border rounded-2xl p-5">
                <h3 className="pb-1 text-xl font-semibold mb-1 border-b">How does react work ?</h3>
                <p>
                    <span className="text-lg font-semibold">Ans: </span>React is a A JavaScript library for building
                    user interfaces. It divides the UI into isolated reusable pieces of code known as components. Each
                    components have avility to accept arbitrary inputs called props. Developers employ it to embed HTML
                    code in JavaScript objects. As JSX accepts valid JavaScript expressions and function embedding, it
                    can simplify complex code structures.
                </p>
            </div>
            <div className="border rounded-2xl p-5">
                <h3 className="pb-1 text-xl font-semibold mb-1 border-b">
                    Difference between props and state in react ?
                </h3>
                <p>
                    <span className="text-lg font-semibold">Ans: </span>Props are used to pass data from one component
                    to another. The state is a local data storage that is local to the component only and cannot be
                    passed to other components.
                </p>
            </div>
            <div className="border rounded-2xl p-5">
                <h3 className="pb-1 text-xl font-semibold mb-1 border-b">Uses Of useEffect instead of fetch api ?</h3>
                <p>
                    <span className="text-lg font-semibold">Ans: </span>The useEffect Hook allows you to perform side
                    effects in your components. Some examples of side effects are: fetching data, manually changing the
                    DOM in React components , timers and setting up a subscription Etc.
                </p>
            </div>
        </div>
    );
};

export default Questions;
