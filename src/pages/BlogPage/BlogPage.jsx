import React from "react";
import "./BlogPage.css";
const BlogPage = () => {
  return (
    <div id="b-body">
      <h1 className="b-b">Blog Page</h1>
      <div className="container text-white  pb-5" id="blog-page">
        <div className="row">
          <div className="col-12">
            <h1>
              <i className="fas fa-pencil-alt mr-3 text-white">Blog</i>
            </h1>
            <hr />
            <div className="mb-3 ">
              <h2 className="text-white">
                What is an access token and refresh token? How do they work and
                where should we store them on the client-side?
              </h2>
              <p>
                <h3 className="text-white">Access Token and Refresh Token: </h3>
                <br />
                <h3 className="text-white">Access Token:</h3> <br /> An access
                token is a credential that is used to authorize and authenticate
                a user's access to protected resources, such as APIs or web
                applications. It is typically a short-lived token that contains
                information about the user and permissions.
                <h3 className="text-white">Refresh Token:</h3> <br /> A refresh
                token is a credential that is used to obtain a new access token
                without requiring the user to re-authenticate. It is typically a
                long-lived token that is issued alongside an access token and is
                used to request a new access token when the current one expires.
                <h3 className="text-white">How they work:</h3> <br />
                When a user logs in or authenticates, an access token and
                refresh token are generated and provided to the client. The
                access token is included in each request to the server to access
                protected resources. If the access token expires, the client can
                use the refresh token to request a new access token from the
                server without requiring the user to log in again. The server
                verifies the refresh token and issues a new access token if it
                is valid.
                <h3 className="text-white">
                  Where to store them on the client-side:
                </h3>{" "}
                <br /> Access tokens should be stored in a secure manner, such
                as in an HTTP-only cookie or in the browser's local storage.
                Refresh tokens should be securely stored, such as in an
                HTTP-only cookie, as they are more sensitive and have a longer
                lifespan.
              </p>
            </div>
            <div className="mb-3">
              <h3 className="text-white">Compare SQL and NoSQL databases?</h3>
              <p>
                <h2 className="text-white">
                  Comparison between SQL and NoSQL Databases:
                </h2>
                <br /> SQL (Structured Query Language) databases are relational
                databases that store data in structured tables with predefined
                schemas. Examples include MySQL, PostgreSQL, and Oracle. NoSQL
                (Not Only SQL) databases are non-relational databases that store
                data in flexible formats, such as key-value pairs, documents,
                graphs, or wide-column stores. Examples include MongoDB,
                Cassandra, and Redis.
                <h3 className="text-white">Key differences:</h3> <br />
                <h3 className="text-white">Data Model:</h3> <br />
                SQL databases have a fixed schema, enforcing data integrity
                through relations and constraints. NoSQL databases have a
                flexible schema, allowing dynamic and unstructured data.
                <h3 className="text-white">Scalability: </h3> <br />
                SQL databases are vertically scalable, meaning they handle
                increased traffic by upgrading the hardware. NoSQL databases are
                horizontally scalable, allowing distribution of data across
                multiple servers.{" "}
                <h3 className="text-white">Query Language:</h3> <br />
                SQL databases use SQL for querying and manipulating data. NoSQL
                databases use different query languages, such as MongoDB's query
                language or Cassandra's CQL.
                <h3 className="text-white">ACID Compliance:</h3> <br />
                SQL databases generally provide ACID (Atomicity, Consistency,
                Isolation, Durability) properties to ensure data integrity.
                NoSQL databases often sacrifice some ACID properties for
                scalability and performance.
              </p>
            </div>
            <div className="mb-3">
              <h2 className="text-white">
                What is express js? What is Nest JS?
              </h2>
              <p>
                <h3 className="text-white"> Express.js:</h3> <br /> Express.js
                is a fast and minimalist web application framework for Node.js.
                It provides a set of features and tools to build web
                applications and APIs easily. It simplifies the process of
                creating server-side applications by providing an intuitive API
                for handling HTTP requests, routing, middleware, and more.
                Express.js is widely used in the Node.js ecosystem and allows
                developers to build scalable and modular web applications.
                <h3 className="text-white">Nest.js:</h3> <br /> Nest.js is a
                progressive Node.js framework for building efficient, reliable,
                and scalable server-side applications. It is built on top of
                Express.js and enhances it by providing additional features,
                such as dependency injection, TypeScript support, modular
                architecture, and powerful CLI. Nest.js follows the principles
                of Angular, which makes it suitable for building complex
                applications with a well-structured codebase.
              </p>
            </div>

            <div className="mb-3">
              <h2 className="text-white">
                What is MongoDB aggregate and how does it work ?
              </h2>
              <p>
                <h3 className="text-white">MongoDB Aggregate:</h3> <br />
                MongoDB Aggregate is a powerful aggregation framework provided
                by MongoDB for data processing and analysis. It allows
                developers to perform advanced operations on collections,
                including filtering, grouping, sorting, joining, and
                transforming data. The aggregation pipeline consists of multiple
                stages, where each stage applies a specific operation to the
                data and passes the result to the next stage. With the
                aggregation framework, developers can perform complex queries
                and transformations on large datasets efficiently and
                effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
