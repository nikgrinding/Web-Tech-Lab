export default function HomePage() {
    return (
        <div className="bg-dark text-white p-4 p-md-5 rounded-5 mt-4 mt-md-5 shadow-lg">
            <div className="container-fluid py-3 text-center">
                <h1 className="display-5 fw-bold">Welcome to the Blog Dashboard</h1>
                <p className="lead col-md-8 mx-auto fs-4">
                    This is the main landing page. Use the navigation bar to check out the latest posts, sign in, or register for an account.
                </p>
                <h2 className="mt-4">Have fun blogging :)</h2>
            </div>
        </div>
    );
}