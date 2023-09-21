import "@styles/globals.css";
import Nav from "@components/nav";
import Provider from "@components/provider";

export const metadata = {
  title: "Blog Website",
  description: "This is a blog website by Suman",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
