const CopyrightComp = () => {

    let date = new Date();
    let year = date.getFullYear();
    return (
        <div className="copyrightsec">
            <div className="container">
                <p>Copyright © {year} Kamleshyad. All Rights Reserved.</p>
            </div>
        </div>
    )
}

export default CopyrightComp;