import arrow from "../assets/arrow_down.svg"


    const addRows = Array.from({length: 20}, (_, i) => i+1);
        

function Wikipane() 
{
    return (
        <>
            <div className="wikiPane overflow-y-auto p-4 flex flex-col max-h-screen">
                    <div className="wikiPanelTitle max-h-48 rounded-md shadow-md backdrop-blur-sm">
                        <h1 className="text-red-700">Crimson Megu Bot</h1>
                        <h2 className=" text-center text-slate-700">Codebase</h2>
                        
                        <br></br>
                    </div>
            <div className="ElementsDiv p-2 flex flex-col ">
                <ul className="wikiList text-slate-500 py-2 ">
                       {addRows.map((item) => (
                            <div key={item} className="itemWikiType outline outline-1 outline-red-950 m-2 p-2 rounded-md flex flex-row">
                                
                                <li key={item}>Entry {item}</li>
                                <img className="arrowEntry size-5 opacity-80" src={arrow}></img>  
                            </div>

                    ))}
                </ul>
            </div>

            </div>
        </>

    );
}
export default Wikipane;