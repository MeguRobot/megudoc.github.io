
    const addRows = Array.from({length: 20}, (_, i) => i+1);
    

function Wikipane() 
{
    return (
        <>
            <div className="wikiPane overflow-y-auto p-4 flex flex-col max-h-screen">
                    <div className="wikiPanelTitle max-h-48">
                        <h1 className="text-red-700">Crimson Megu Bot</h1>
                        <h2 className=" text-center text-slate-700">Codebase</h2>
                        <br></br>
                    </div>
                <ul className="wikiList text-slate-500 p-5">
                    {addRows.map((item) => (
                        
                        <li key={item}>Item {item}</li>
                    ))}
                </ul>
            </div>
        </>

    );
}
export default Wikipane;