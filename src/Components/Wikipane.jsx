
    const addRows = Array.from({length: 100}, (_, i) => i+1);
 

function Wikipane() 
{
    return (
        <>
            <div className="wikiPane overflow-y-auto p-4 flex flex-col max-h-screen ">
                <ul>
                    {addRows.map((item) => (
                        <li key={item}>Item {item}</li>
                    ))}
                </ul>
            </div>
        </>

    );
}
export default Wikipane;