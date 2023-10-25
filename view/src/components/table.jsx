import React, { useState, useEffect } from "react";
import { FetcherAllProcess } from "./helpers/fetcher.js";

export function Table({ idreq = null }) {
    const [data, setData] = useState(null);

    useEffect(() => {
        async function fetchData() {
            if (idreq != null) {
                const returnToFetch = await FetcherAllProcess(`http://localhost:3000/user/doctor/${idreq}`);
                setData(await returnToFetch);
            } else {
                const returnToFetch = await FetcherAllProcess("http://localhost:3000/user");
                setData(await returnToFetch);
            }
        }

        setTimeout(() => {
            fetchData();
        }, 1000);
    }, []);

    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Email</th>
                        <th scope="col">Names</th>
                        <th scope="col">Genre</th>
                        <th scope="col">Address</th>
                        <th scope="col">Phone</th>
                    </tr>
                </thead>
                <tbody>
                    {(() => {
                        console.log(data, 'asdas');
                        return (
                            <h1>hola</h1>
                        );
                    })()}
                </tbody>

            </table>
        </div>
    )
}

export default Table;
