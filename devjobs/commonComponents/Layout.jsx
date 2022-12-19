const Layout = ({ children }) => {
    return (
        <div className="flex flex-col justify-between w-full min-h-screen relative bg-slate-100 h-auto">
            {children}
        </div>
    );
};

export default Layout;
