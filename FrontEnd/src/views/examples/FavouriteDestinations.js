import UserHeader from "components/Headers/UserHeader.js";
import { Card, CardHeader, Table } from "reactstrap";
import { RiDeleteBin5Line } from "react-icons/ri"
import { RxStarFilled } from "react-icons/rx";
import { getUserLocations } from "services/locationService";
import { getUserByEmail } from "services/userService";
import { useEffect, useState } from "react";

const FavouriteDestinations = () => {

    const [list, setList] = useState([])

    const getDestinations = async () => {
        let e = localStorage.getItem("email")
        let user = await getUserByEmail(e)
        const res = await getUserLocations(user)
        return res
    }

    useEffect(() => {
        const des = async () => {
            let d = await getDestinations()
            setList(d)
        }
        des()
    }, [])

    return (
        <>
            <UserHeader />
            <Card className="shadow" style={{ marginTop: "-35%", marginRight: "5%", marginLeft: "5%" }} >
                <CardHeader className="border-0">
                    My Favourite Destinations
                </CardHeader>
                <Table className="align-items-center table-flush" responsive hover>
                    <thead className="thead-light">
                        <tr style={{ textAlign: "center" }}>
                            <th scope="col">Destinaion Name</th>
                            <th scope="col">ToDay</th>
                            <th scope="col">Next day 1</th>
                            <th scope="col">Next day 2</th>
                            <th scope="col">Next day 3</th>
                            <th scope="col">Next day 4</th>
                            <th scope="col">Next day 5</th>
                            <th scope="col" />
                        </tr>
                    </thead>
                    <tbody>
                        {list.length>0 && list.map((e, i) =>
                            <tr key={i}>
                                <td style={{ textAlign: "center", fontWeight: "bold" }}>
                                    Ouagadougou <RxStarFilled size={20} style={{ marginLeft: "5%" }} color='#f58733' />
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M1.56 16.9c0 .9.22 1.73.66 2.49s1.04 1.36 1.8 1.8c.76.44 1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66.76-.44 1.37-1.04 1.81-1.8.44-.76.67-1.59.67-2.49 0-.66-.14-1.33-.42-2 .76-.92 1.14-2.03 1.14-3.3 0-.71-.14-1.39-.41-2.04-.27-.65-.65-1.2-1.12-1.67-.47-.47-1.02-.85-1.67-1.12-.65-.28-1.33-.41-2.04-.41-1.48 0-2.77.58-3.88 1.74-.77-.44-1.67-.66-2.7-.66-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 00-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07zm1.71 0c0-.84.28-1.56.84-2.17.56-.61 1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71.8-.73 1.74-1.09 2.81-1.09 1.1 0 2.06.37 2.87 1.1a3.99 3.99 0 011.37 2.71l.07.58c.02.11.09.17.21.17h1.61c.88 0 1.64.32 2.28.96.64.64.96 1.39.96 2.27 0 .91-.32 1.68-.95 2.32-.63.64-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97-.63-.65-.95-1.42-.95-2.32zm6.7-12.27c0 .24.08.45.24.63l.66.64c.25.19.46.27.64.25.21 0 .39-.09.55-.26s.24-.38.24-.62-.09-.44-.26-.59l-.59-.66a.888.888 0 00-.61-.24c-.24 0-.45.08-.62.25-.17.16-.25.36-.25.6zm5.34 4.43c.69-.67 1.51-1 2.45-1 .99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94zm1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59v2.05zm5.52 2.29c0 .26.07.46.22.62.21.16.42.24.62.24.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64 0-.24-.08-.44-.24-.6a.807.807 0 00-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62zm.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 00.24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.779.779 0 00-.57-.24c-.24 0-.44.08-.6.24-.17.16-.26.36-.26.6zm1.47-6.31c0 .23.09.42.26.58.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59-.08-.44-.23-.6-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.79.79 0 00-.26.6z" />
                                    </svg> 33 °C
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M.45 20.97c0 .24.08.45.24.61.44.18.73.27.88.27h7.88c.24 0 .44-.09.6-.26.17-.17.25-.38.25-.61 0-.23-.08-.43-.25-.59a.847.847 0 00-.6-.24H1.57c-.26 0-.52.08-.76.24-.24.16-.36.36-.36.58zm1.39-3c0 .24.08.43.25.59.15.17.34.26.58.26h9.4c.24 0 .44-.08.61-.25.17-.17.25-.37.25-.6 0-.24-.08-.44-.25-.61a.822.822 0 00-.61-.25h-9.4c-.23 0-.43.08-.59.25-.16.17-.24.37-.24.61zm1.05-2.37c0 .09.06.13.17.13h1.39c.12 0 .19-.04.22-.13.26-.53.62-.97 1.09-1.32.47-.35 1-.55 1.58-.62h.54c.11 0 .16-.06.16-.19l.07-.56c.07-.71.3-1.36.69-1.95.39-.58.9-1.04 1.53-1.37s1.3-.5 2.02-.5c1.09 0 2.04.37 2.85 1.1s1.27 1.64 1.39 2.72l.07.56c0 .12.06.19.18.19h1.6c.89 0 1.65.32 2.3.96.65.64.97 1.39.97 2.27 0 .9-.32 1.67-.97 2.31-.64.64-1.41.96-2.31.96h-6.89c-.11 0-.17.06-.17.19v1.33c0 .12.06.18.17.18h6.89c.9 0 1.73-.22 2.49-.67.76-.44 1.37-1.05 1.81-1.81.44-.76.67-1.59.67-2.49 0-.73-.14-1.39-.43-2.01.78-.96 1.16-2.06 1.16-3.28 0-.94-.24-1.81-.71-2.62a5.201 5.201 0 00-1.92-1.92c-.81-.47-1.69-.71-2.63-.71-.73 0-1.43.15-2.1.45-.67.3-1.25.71-1.74 1.25-.83-.43-1.73-.65-2.7-.65-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.09 3.36c-.85.21-1.6.63-2.25 1.25s-1.1 1.36-1.35 2.21c.02.02.01.04.01.07zm.71 8.56c0 .24.09.43.26.59.16.17.36.25.59.25h9.42c.23 0 .43-.08.59-.25s.24-.36.24-.6c0-.25-.08-.46-.24-.62s-.36-.25-.6-.25H4.45c-.24 0-.44.08-.6.25s-.25.38-.25.63zm7.49-19.51c0 .25.08.45.24.6l.64.66c.16.16.36.24.6.24.26 0 .46-.08.62-.24.16-.16.24-.36.24-.61 0-.23-.08-.43-.24-.59l-.65-.65a.783.783 0 00-.57-.25c-.25 0-.46.08-.63.25s-.25.36-.25.59zm5.36 4.38c.66-.63 1.48-.95 2.45-.95.97 0 1.8.34 2.49 1.03.68.68 1.03 1.51 1.03 2.49 0 .67-.15 1.27-.46 1.81-.94-.95-2.11-1.43-3.5-1.43h-.3a6.084 6.084 0 00-1.71-2.95zm1.6-5.22c0 .24.08.43.25.59s.36.23.6.23c.25 0 .45-.08.6-.23.15-.15.23-.35.23-.6V1.76c0-.24-.08-.45-.23-.61a.785.785 0 00-.6-.25c-.23 0-.43.08-.6.25s-.25.37-.25.61v2.05zm5.52 2.28c0 .24.08.44.25.6.12.16.33.24.6.24.27 0 .47-.08.59-.24l1.46-1.44c.16-.15.24-.36.24-.62 0-.23-.08-.43-.25-.6-.17-.17-.37-.25-.6-.25s-.44.08-.61.23L23.83 5.5c-.17.17-.26.36-.26.59zm.8 11.86c0 .24.08.44.23.6l.66.63c.24.18.45.27.61.27.16 0 .37-.09.61-.27.16-.16.24-.36.24-.6 0-.23-.08-.43-.24-.61l-.64-.61a.94.94 0 00-.65-.26c-.24 0-.43.08-.59.24a.89.89 0 00-.23.61zm1.44-6.32c0 .24.09.45.27.61.18.17.38.25.6.25h2.03c.23 0 .42-.08.59-.25.17-.17.25-.37.25-.61 0-.22-.08-.41-.24-.57a.84.84 0 00-.59-.23h-2.03c-.24 0-.45.08-.62.23-.17.16-.26.35-.26.57z" />
                                    </svg> 29 °C
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M1.56 16.9c0 .9.22 1.73.66 2.49s1.04 1.36 1.8 1.8c.76.44 1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66.76-.44 1.37-1.04 1.81-1.8.44-.76.67-1.59.67-2.49 0-.66-.14-1.33-.42-2 .76-.92 1.14-2.03 1.14-3.3 0-.71-.14-1.39-.41-2.04-.27-.65-.65-1.2-1.12-1.67-.47-.47-1.02-.85-1.67-1.12-.65-.28-1.33-.41-2.04-.41-1.48 0-2.77.58-3.88 1.74-.77-.44-1.67-.66-2.7-.66-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 00-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07zm1.71 0c0-.84.28-1.56.84-2.17.56-.61 1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71.8-.73 1.74-1.09 2.81-1.09 1.1 0 2.06.37 2.87 1.1a3.99 3.99 0 011.37 2.71l.07.58c.02.11.09.17.21.17h1.61c.88 0 1.64.32 2.28.96.64.64.96 1.39.96 2.27 0 .91-.32 1.68-.95 2.32-.63.64-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97-.63-.65-.95-1.42-.95-2.32zm6.7-12.27c0 .24.08.45.24.63l.66.64c.25.19.46.27.64.25.21 0 .39-.09.55-.26s.24-.38.24-.62-.09-.44-.26-.59l-.59-.66a.888.888 0 00-.61-.24c-.24 0-.45.08-.62.25-.17.16-.25.36-.25.6zm5.34 4.43c.69-.67 1.51-1 2.45-1 .99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94zm1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59v2.05zm5.52 2.29c0 .26.07.46.22.62.21.16.42.24.62.24.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64 0-.24-.08-.44-.24-.6a.807.807 0 00-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62zm.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 00.24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.779.779 0 00-.57-.24c-.24 0-.44.08-.6.24-.17.16-.26.36-.26.6zm1.47-6.31c0 .23.09.42.26.58.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59-.08-.44-.23-.6-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.79.79 0 00-.26.6z" />
                                    </svg> 33 °C
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M.45 20.97c0 .24.08.45.24.61.44.18.73.27.88.27h7.88c.24 0 .44-.09.6-.26.17-.17.25-.38.25-.61 0-.23-.08-.43-.25-.59a.847.847 0 00-.6-.24H1.57c-.26 0-.52.08-.76.24-.24.16-.36.36-.36.58zm1.39-3c0 .24.08.43.25.59.15.17.34.26.58.26h9.4c.24 0 .44-.08.61-.25.17-.17.25-.37.25-.6 0-.24-.08-.44-.25-.61a.822.822 0 00-.61-.25h-9.4c-.23 0-.43.08-.59.25-.16.17-.24.37-.24.61zm1.05-2.37c0 .09.06.13.17.13h1.39c.12 0 .19-.04.22-.13.26-.53.62-.97 1.09-1.32.47-.35 1-.55 1.58-.62h.54c.11 0 .16-.06.16-.19l.07-.56c.07-.71.3-1.36.69-1.95.39-.58.9-1.04 1.53-1.37s1.3-.5 2.02-.5c1.09 0 2.04.37 2.85 1.1s1.27 1.64 1.39 2.72l.07.56c0 .12.06.19.18.19h1.6c.89 0 1.65.32 2.3.96.65.64.97 1.39.97 2.27 0 .9-.32 1.67-.97 2.31-.64.64-1.41.96-2.31.96h-6.89c-.11 0-.17.06-.17.19v1.33c0 .12.06.18.17.18h6.89c.9 0 1.73-.22 2.49-.67.76-.44 1.37-1.05 1.81-1.81.44-.76.67-1.59.67-2.49 0-.73-.14-1.39-.43-2.01.78-.96 1.16-2.06 1.16-3.28 0-.94-.24-1.81-.71-2.62a5.201 5.201 0 00-1.92-1.92c-.81-.47-1.69-.71-2.63-.71-.73 0-1.43.15-2.1.45-.67.3-1.25.71-1.74 1.25-.83-.43-1.73-.65-2.7-.65-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.09 3.36c-.85.21-1.6.63-2.25 1.25s-1.1 1.36-1.35 2.21c.02.02.01.04.01.07zm.71 8.56c0 .24.09.43.26.59.16.17.36.25.59.25h9.42c.23 0 .43-.08.59-.25s.24-.36.24-.6c0-.25-.08-.46-.24-.62s-.36-.25-.6-.25H4.45c-.24 0-.44.08-.6.25s-.25.38-.25.63zm7.49-19.51c0 .25.08.45.24.6l.64.66c.16.16.36.24.6.24.26 0 .46-.08.62-.24.16-.16.24-.36.24-.61 0-.23-.08-.43-.24-.59l-.65-.65a.783.783 0 00-.57-.25c-.25 0-.46.08-.63.25s-.25.36-.25.59zm5.36 4.38c.66-.63 1.48-.95 2.45-.95.97 0 1.8.34 2.49 1.03.68.68 1.03 1.51 1.03 2.49 0 .67-.15 1.27-.46 1.81-.94-.95-2.11-1.43-3.5-1.43h-.3a6.084 6.084 0 00-1.71-2.95zm1.6-5.22c0 .24.08.43.25.59s.36.23.6.23c.25 0 .45-.08.6-.23.15-.15.23-.35.23-.6V1.76c0-.24-.08-.45-.23-.61a.785.785 0 00-.6-.25c-.23 0-.43.08-.6.25s-.25.37-.25.61v2.05zm5.52 2.28c0 .24.08.44.25.6.12.16.33.24.6.24.27 0 .47-.08.59-.24l1.46-1.44c.16-.15.24-.36.24-.62 0-.23-.08-.43-.25-.6-.17-.17-.37-.25-.6-.25s-.44.08-.61.23L23.83 5.5c-.17.17-.26.36-.26.59zm.8 11.86c0 .24.08.44.23.6l.66.63c.24.18.45.27.61.27.16 0 .37-.09.61-.27.16-.16.24-.36.24-.6 0-.23-.08-.43-.24-.61l-.64-.61a.94.94 0 00-.65-.26c-.24 0-.43.08-.59.24a.89.89 0 00-.23.61zm1.44-6.32c0 .24.09.45.27.61.18.17.38.25.6.25h2.03c.23 0 .42-.08.59-.25.17-.17.25-.37.25-.61 0-.22-.08-.41-.24-.57a.84.84 0 00-.59-.23h-2.03c-.24 0-.45.08-.62.23-.17.16-.26.35-.26.57z" />
                                    </svg> 29 °C
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M1.56 16.9c0 .9.22 1.73.66 2.49s1.04 1.36 1.8 1.8c.76.44 1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66.76-.44 1.37-1.04 1.81-1.8.44-.76.67-1.59.67-2.49 0-.66-.14-1.33-.42-2 .76-.92 1.14-2.03 1.14-3.3 0-.71-.14-1.39-.41-2.04-.27-.65-.65-1.2-1.12-1.67-.47-.47-1.02-.85-1.67-1.12-.65-.28-1.33-.41-2.04-.41-1.48 0-2.77.58-3.88 1.74-.77-.44-1.67-.66-2.7-.66-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 00-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07zm1.71 0c0-.84.28-1.56.84-2.17.56-.61 1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71.8-.73 1.74-1.09 2.81-1.09 1.1 0 2.06.37 2.87 1.1a3.99 3.99 0 011.37 2.71l.07.58c.02.11.09.17.21.17h1.61c.88 0 1.64.32 2.28.96.64.64.96 1.39.96 2.27 0 .91-.32 1.68-.95 2.32-.63.64-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97-.63-.65-.95-1.42-.95-2.32zm6.7-12.27c0 .24.08.45.24.63l.66.64c.25.19.46.27.64.25.21 0 .39-.09.55-.26s.24-.38.24-.62-.09-.44-.26-.59l-.59-.66a.888.888 0 00-.61-.24c-.24 0-.45.08-.62.25-.17.16-.25.36-.25.6zm5.34 4.43c.69-.67 1.51-1 2.45-1 .99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94zm1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59v2.05zm5.52 2.29c0 .26.07.46.22.62.21.16.42.24.62.24.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64 0-.24-.08-.44-.24-.6a.807.807 0 00-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62zm.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 00.24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.779.779 0 00-.57-.24c-.24 0-.44.08-.6.24-.17.16-.26.36-.26.6zm1.47-6.31c0 .23.09.42.26.58.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59-.08-.44-.23-.6-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.79.79 0 00-.26.6z" />
                                    </svg> 33 °C
                                </td>
                                <td style={{ textAlign: "center" }}>
                                    <svg
                                        viewBox="0 0 30 30"
                                        fill="currentColor"
                                        height="2em"
                                        width="2em"
                                    >
                                        <path d="M.45 20.97c0 .24.08.45.24.61.44.18.73.27.88.27h7.88c.24 0 .44-.09.6-.26.17-.17.25-.38.25-.61 0-.23-.08-.43-.25-.59a.847.847 0 00-.6-.24H1.57c-.26 0-.52.08-.76.24-.24.16-.36.36-.36.58zm1.39-3c0 .24.08.43.25.59.15.17.34.26.58.26h9.4c.24 0 .44-.08.61-.25.17-.17.25-.37.25-.6 0-.24-.08-.44-.25-.61a.822.822 0 00-.61-.25h-9.4c-.23 0-.43.08-.59.25-.16.17-.24.37-.24.61zm1.05-2.37c0 .09.06.13.17.13h1.39c.12 0 .19-.04.22-.13.26-.53.62-.97 1.09-1.32.47-.35 1-.55 1.58-.62h.54c.11 0 .16-.06.16-.19l.07-.56c.07-.71.3-1.36.69-1.95.39-.58.9-1.04 1.53-1.37s1.3-.5 2.02-.5c1.09 0 2.04.37 2.85 1.1s1.27 1.64 1.39 2.72l.07.56c0 .12.06.19.18.19h1.6c.89 0 1.65.32 2.3.96.65.64.97 1.39.97 2.27 0 .9-.32 1.67-.97 2.31-.64.64-1.41.96-2.31.96h-6.89c-.11 0-.17.06-.17.19v1.33c0 .12.06.18.17.18h6.89c.9 0 1.73-.22 2.49-.67.76-.44 1.37-1.05 1.81-1.81.44-.76.67-1.59.67-2.49 0-.73-.14-1.39-.43-2.01.78-.96 1.16-2.06 1.16-3.28 0-.94-.24-1.81-.71-2.62a5.201 5.201 0 00-1.92-1.92c-.81-.47-1.69-.71-2.63-.71-.73 0-1.43.15-2.1.45-.67.3-1.25.71-1.74 1.25-.83-.43-1.73-.65-2.7-.65-1.41 0-2.67.44-3.76 1.31s-1.79 1.99-2.09 3.36c-.85.21-1.6.63-2.25 1.25s-1.1 1.36-1.35 2.21c.02.02.01.04.01.07zm.71 8.56c0 .24.09.43.26.59.16.17.36.25.59.25h9.42c.23 0 .43-.08.59-.25s.24-.36.24-.6c0-.25-.08-.46-.24-.62s-.36-.25-.6-.25H4.45c-.24 0-.44.08-.6.25s-.25.38-.25.63zm7.49-19.51c0 .25.08.45.24.6l.64.66c.16.16.36.24.6.24.26 0 .46-.08.62-.24.16-.16.24-.36.24-.61 0-.23-.08-.43-.24-.59l-.65-.65a.783.783 0 00-.57-.25c-.25 0-.46.08-.63.25s-.25.36-.25.59zm5.36 4.38c.66-.63 1.48-.95 2.45-.95.97 0 1.8.34 2.49 1.03.68.68 1.03 1.51 1.03 2.49 0 .67-.15 1.27-.46 1.81-.94-.95-2.11-1.43-3.5-1.43h-.3a6.084 6.084 0 00-1.71-2.95zm1.6-5.22c0 .24.08.43.25.59s.36.23.6.23c.25 0 .45-.08.6-.23.15-.15.23-.35.23-.6V1.76c0-.24-.08-.45-.23-.61a.785.785 0 00-.6-.25c-.23 0-.43.08-.6.25s-.25.37-.25.61v2.05zm5.52 2.28c0 .24.08.44.25.6.12.16.33.24.6.24.27 0 .47-.08.59-.24l1.46-1.44c.16-.15.24-.36.24-.62 0-.23-.08-.43-.25-.6-.17-.17-.37-.25-.6-.25s-.44.08-.61.23L23.83 5.5c-.17.17-.26.36-.26.59zm.8 11.86c0 .24.08.44.23.6l.66.63c.24.18.45.27.61.27.16 0 .37-.09.61-.27.16-.16.24-.36.24-.6 0-.23-.08-.43-.24-.61l-.64-.61a.94.94 0 00-.65-.26c-.24 0-.43.08-.59.24a.89.89 0 00-.23.61zm1.44-6.32c0 .24.09.45.27.61.18.17.38.25.6.25h2.03c.23 0 .42-.08.59-.25.17-.17.25-.37.25-.61 0-.22-.08-.41-.24-.57a.84.84 0 00-.59-.23h-2.03c-.24 0-.45.08-.62.23-.17.16-.26.35-.26.57z" />
                                    </svg> 29 °C
                                </td>
                                <td>
                                    <RiDeleteBin5Line size={20} color="red" />
                                </td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Card>
        </>
    );
};

export default FavouriteDestinations;
