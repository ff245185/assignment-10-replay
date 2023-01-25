import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className="h-screen my-10">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <Link to="/" className="mb-6 sm:mx-auto">
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                         <p className='text-3xl text-red-600'>⇚</p>
                        </div>
                    </Link>
                </div>
                <div className="space-y-4">
                    <Link title=" What is CORS used for?">
                        Cross-Origin Resource Sharing (CORS) is an HTTP-header based
                        mechanism that server to indicate any origins (domain,
                        scheme, or port) other than its own from which a browser should
                        permit loading resources
                    </Link>
                    <Link
                        title="Why are you using firebase?
         What other options do you have to implement authentication?">
                        The Firebase Realtime Database lets you build rich, collaborative
                        applications by allowing secure access to the database directly
                        from client-side code. Data is persisted locally, and even while
                        offline, realtime events continue to fire, giving the end user a
                        responsive experience.
                        <br />
                        Firebase Authentication provides backend services, easy-to-use
                        SDKs, and ready-made UI libraries to authenticate users to your
                        app. It supports authentication using passwords, phone numbers,
                        popular federated identity providers like Google, Facebook and
                        Twitter, and more.
                    </Link>
                    <Link title="How does the private route work?">
                        The private route component is similar to the public route, the
                        only change is that redirect URL and authenticate condition. If
                        the user is not authenticated he will be redirected to the login
                        page and the user can only access the authenticated routes If he
                        is authenticated (Logged in).
                    </Link>
                    <Link title="What is Node? How does Node work?">
                        Node.js is an open-source, cross-platform, back-end JavaScript
                        runtime environment that runs on a JavaScript Engine (i.e. V8
                        engine) and executes JavaScript code outside a web browser, which
                        was designed to build scalable network applications.
                        <br />
                        Node JS Web Server internally maintains a Limited Thread pool to
                        provide services to the Client Requests. Node JS Web Server
                        receives those requests and places them into a Queue. It is known
                        as “Event Queue”. Node JS Web Server internally has a Component,
                        known as “Event Loop”.
                    </Link>
                </div>
            </div>
        </div>
    </div>
    );
};

export default About;