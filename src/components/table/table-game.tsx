import Games from "../../app/games";
import "./table-game.css"

export function TableGame({header, data}) {
    return(
        <div>
            <table className="w-full">
                <thead>
                    <tr>
                        {header.map(item => (
                            <th className="th-header" key={item.id}>{item.name}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                {data.map((item, index1) => {
                    if (index1 % 2 == 0) {
                        return (
                            <tr className={'color-content-odd'} key={item.id}>
                                {header.map((e, index2)=> {
                                    return (
                                        <td className={'td-body text-center '+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                    )
                                })}
                            </tr>
                        )
                    }
                    return (
                        <tr className={'color-content-even'} key={item.id}>
                            {header.map((e, index2)=> {
                                return (
                                    <td className={'td-body text-center'+ (index2==0?' td-body-text1':'')} key={index2}>{item[e.id]}</td>
                                )
                            })}
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}
export default TableGame;
