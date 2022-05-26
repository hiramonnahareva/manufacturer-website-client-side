import React from 'react';

const Blogs = () => {
    return (
        <div>
            <h2></h2>
            <p>A lot of methods, used to optimize the performance of React, have been substituted by simpler techniques and commands.The majority of React.js developers, including us, use Chrome Dev tools and React developers tools. These instruments help evaluate the performance of the web project and optimize its performance.

            </p>
            <div>
                There are four main types of state you need to properly manage in your React apps: Local state,Global state, Server state, URL state.
                1. Local state is data we manage in one or another component.
                2.Global (UI) state: Global state is data we manage across multiple components.
                3. Server state: Server state can be deceptively challenging to manage.
                4. URL state : URL state is data that exists on our URLs, including the pathname and query parameters.
            </div>
            <div>
                State updates in React are asynchronous; when an update is requested, there is no guarantee that the updates will be made immediately.</div>

            <div>
            What is a unit test? Why should write unit tests?
            Unit testing is a type of software testing where individual units or software components are tested.Unit testing ensures that all code meets quality standards before it's deployed. Unit tests save time and money.Usually, we tend to test the happy path more than the unhappy path.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.
            </div>
        </div>
    );
};

export default Blogs;