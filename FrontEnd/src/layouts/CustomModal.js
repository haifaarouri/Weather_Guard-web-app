import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import {
    Card,
    CardHeader,
    CardFooter,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Table,
    Row
} from "reactstrap";

const CustomModal = ({ modal, toggle, weatherData }) => {

    const currentDate = weatherData && new Date(weatherData.list[0].dt * 1000)

    const weatherDataFilter = weatherData && weatherData.list.filter((item) => {
        const date = new Date(item.dt * 1000)
        return date.getDate() === currentDate.getDate()
    });

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle} size='xl'>
                <ModalBody>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    {currentDate && <h3 className="mb-0">{currentDate.getFullYear()} / {currentDate.getMonth() + 1} / {currentDate.getDate()}</h3>}
                                </CardHeader>
                                <Table className="align-items-center table-flush" responsive>
                                    <thead className="thead-light">
                                        <tr>
                                            <th scope="col">Time (Hour)</th>
                                            <th scope="col">Temperature</th>
                                            <th scope="col">Pressure (mb)</th>
                                            <th scope="col">Humidity</th>
                                            <th scope="col">Wind (kph)</th>
                                            <th scope="col">Description</th>
                                            <th scope="col" />
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {weatherDataFilter && weatherDataFilter.map((e, i) => (
                                            <tr key={i}>
                                                <th scope="row">
                                                    <Media className="align-items-center">
                                                        <Media>
                                                            <span className="mb-0 text-sm">
                                                                {e.dt_txt} <svg
                                                                    viewBox="0 0 30 30"
                                                                    fill="currentColor"
                                                                    height="1em"
                                                                    width="1em"
                                                                >
                                                                    <path d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11 3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4 1.81 2.2 2.4 3.6.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59-2.2 1.8-3.59 2.39-2.84.89-4.37.89c-1.53 0-3-.3-4.39-.89s-2.59-1.4-3.6-2.4-1.8-2.2-2.4-3.58-.88-2.84-.88-4.37zm2.48 0c0 2.37.86 4.43 2.59 6.18 1.73 1.73 3.79 2.59 6.2 2.59 1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2 1.19-2.81 1.19-4.39-.4-3.05-1.19-4.4-1.86-2.42-3.21-3.21-2.81-1.18-4.39-1.18-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4zm3.95 2.09c.06-.22.19-.39.38-.51l3.59-2.09V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24.43.08.59.24.24.36.24.59v6.67c0 .19-.06.35-.17.5s-.25.24-.42.29l-3.84 2.23c-.12.08-.25.12-.41.12-.32 0-.56-.14-.72-.42a.893.893 0 01-.07-.64z" />
                                                                </svg>
                                                                <svg
                                                                    viewBox="0 0 30 30"
                                                                    fill="currentColor"
                                                                    height="1em"
                                                                    width="1em"
                                                                >
                                                                    <path d="M3.74 14.47c0-2.04.51-3.93 1.52-5.66s2.38-3.1 4.11-4.11 3.61-1.51 5.64-1.51c1.52 0 2.98.3 4.37.89s2.58 1.4 3.59 2.4 1.81 2.2 2.4 3.6.89 2.85.89 4.39c0 1.52-.3 2.98-.89 4.37s-1.4 2.59-2.4 3.59-2.2 1.8-3.59 2.39-2.84.89-4.37.89c-1.53 0-3-.3-4.39-.89s-2.59-1.4-3.6-2.4-1.8-2.2-2.4-3.58-.88-2.84-.88-4.37zm2.48 0c0 2.37.86 4.43 2.59 6.18 1.73 1.73 3.79 2.59 6.2 2.59 1.58 0 3.05-.39 4.39-1.18s2.42-1.85 3.21-3.2 1.19-2.81 1.19-4.39-.4-3.05-1.19-4.4-1.86-2.42-3.21-3.21-2.81-1.18-4.39-1.18-3.05.39-4.39 1.18S8.2 8.72 7.4 10.07s-1.18 2.82-1.18 4.4zm7.92 0V7.81c0-.23.08-.43.24-.59s.36-.24.59-.24c.22 0 .42.08.59.24s.25.36.25.59v3.53l.75-1.3c.12-.2.29-.32.52-.38s.44-.03.64.09c.2.11.32.27.39.5s.04.43-.08.63l-2.29 3.91c-.13.35-.38.53-.76.53-.23 0-.43-.08-.59-.24s-.25-.37-.25-.61z" />
                                                                </svg>
                                                            </span>
                                                        </Media>
                                                    </Media>
                                                </th>
                                                <td>
                                                    {e.main.temp} <svg
                                                        viewBox="0 0 30 30"
                                                        fill="currentColor"
                                                        height="2em"
                                                        width="2em"
                                                    >
                                                        <path d="M9.75 10.98c0-.5.18-.93.53-1.28.36-.36.78-.53 1.28-.53.49 0 .92.18 1.27.53.35.36.53.78.53 1.28s-.18.93-.53 1.28c-.35.36-.78.53-1.27.53-.5 0-.93-.18-1.28-.53s-.53-.78-.53-1.28zm.88 0c0 .26.09.48.27.67.19.19.41.28.67.28.26 0 .48-.09.67-.28s.28-.41.28-.67c0-.26-.09-.48-.28-.67s-.41-.28-.67-.28c-.26 0-.48.09-.67.28a.92.92 0 00-.27.67zm3.89 4.42c0 .77.21 1.45.64 2.05.22.31.53.56.93.75.39.18.84.28 1.34.28 1.46 0 2.38-.56 2.75-1.67.04-.14.02-.28-.06-.41a.485.485 0 00-.33-.23.443.443 0 00-.4.07c-.12.08-.2.19-.23.34 0 .01 0 .02-.01.05l-.02.07c-.11.19-.26.34-.45.45-.31.19-.72.28-1.23.28-.31 0-.59-.05-.83-.16-.4-.17-.68-.47-.85-.89-.11-.27-.17-.6-.17-.97v-3.22c0-.15.01-.3.03-.45.04-.38.19-.73.45-1.04.29-.35.75-.52 1.38-.52.52 0 .93.09 1.23.27.2.12.35.27.45.45.01.02.01.05.02.08s.01.05.01.06c.04.14.12.24.23.3.12.07.25.08.4.05.14-.03.25-.11.33-.23.08-.12.1-.25.06-.4v-.01l-.08-.23c-.05-.11-.14-.26-.28-.43-.13-.18-.29-.32-.45-.44-.21-.15-.48-.27-.82-.38-.34-.1-.71-.15-1.11-.15-.51 0-.95.09-1.35.27-.39.18-.7.42-.91.73-.43.59-.65 1.28-.65 2.07v3.21z" />
                                                    </svg>
                                                </td>
                                                <td>
                                                    {e.main.pressure} <svg
                                                        viewBox="0 0 30 30"
                                                        fill="currentColor"
                                                        height="2em"
                                                        width="2em"
                                                    >
                                                        <path d="M7.69 13.2c0-.99.19-1.94.58-2.85.39-.91.91-1.68 1.57-2.33s1.44-1.17 2.34-1.56c.9-.39 1.85-.58 2.84-.58.99 0 1.94.19 2.85.58.9.39 1.68.91 2.33 1.56.65.65 1.17 1.43 1.56 2.33s.58 1.85.58 2.85c0 1.62-.48 3.06-1.44 4.34a7.247 7.247 0 01-3.71 2.61v3.29h-4.24v-3.25c-1.54-.45-2.81-1.32-3.79-2.61s-1.47-2.75-1.47-4.38zm1.61 0c0 1.55.56 2.88 1.69 3.99 1.11 1.12 2.45 1.68 4.02 1.68 1.03 0 1.99-.25 2.86-.76a5.76 5.76 0 002.09-2.07c.51-.87.77-1.82.77-2.85 0-.77-.15-1.5-.45-2.21s-.71-1.31-1.22-1.82-1.12-.92-1.83-1.22a5.6 5.6 0 00-2.21-.45c-.77 0-1.5.15-2.21.45a5.651 5.651 0 00-3.04 3.04c-.32.72-.47 1.45-.47 2.22zm.58.36v-.72h2.17v.72H9.88zm1.09-3.54l.52-.52 1.52 1.52-.52.53-1.52-1.53zm2.53 4.93c0-.42.15-.78.44-1.09.29-.31.65-.47 1.06-.48l2.73-4.49.66.35-2.02 4.83c.18.25.26.54.26.88 0 .44-.15.81-.46 1.11-.31.3-.68.45-1.12.45-.43 0-.8-.15-1.1-.45-.3-.3-.45-.67-.45-1.11zm1.31-4.67V8.12h.69v2.17h-.69zm2.94 3.27v-.74h2.17v.74h-2.17z" />
                                                    </svg>
                                                </td>
                                                <td>
                                                    {e.main.humidity} <svg
                                                        viewBox="0 0 30 30"
                                                        fill="currentColor"
                                                        height="2em"
                                                        width="2em"
                                                    >
                                                        <path d="M7.56 17.19c0-.88.24-1.89.72-3.03s1.1-2.25 1.86-3.31c1.56-2.06 2.92-3.62 4.06-4.67l.75-.72c.25.26.53.5.83.72.41.42 1.04 1.11 1.88 2.09s1.57 1.85 2.17 2.65c.71 1.01 1.32 2.1 1.81 3.25s.74 2.16.74 3.03c0 1-.19 1.95-.58 2.86-.39.91-.91 1.7-1.57 2.36-.66.66-1.45 1.19-2.37 1.58-.92.39-1.89.59-2.91.59-1 0-1.95-.19-2.86-.57-.91-.38-1.7-.89-2.36-1.55-.66-.65-1.19-1.44-1.58-2.35s-.59-1.89-.59-2.93zm2.26-2.93c0 .83.17 1.49.52 1.99.35.49.88.74 1.59.74.72 0 1.25-.25 1.61-.74.35-.49.53-1.15.54-1.99-.01-.84-.19-1.5-.54-2-.35-.49-.89-.74-1.61-.74-.71 0-1.24.25-1.59.74-.35.5-.52 1.16-.52 2zm1.57 0v-.35c0-.08.01-.19.02-.33s.02-.25.05-.32.05-.16.09-.24c.04-.08.09-.15.15-.18.07-.04.14-.06.23-.06.14 0 .25.04.33.12s.14.21.17.38c.03.18.05.32.06.45s.01.3.01.52c0 .23 0 .4-.01.52s-.03.27-.06.45c-.03.17-.09.3-.17.38s-.19.12-.33.12c-.09 0-.16-.02-.23-.06a.335.335 0 01-.15-.18c-.04-.08-.07-.17-.09-.24-.02-.08-.04-.19-.05-.32-.01-.14-.02-.25-.02-.32v-.34zm.59 7.75h1.32l4.99-10.74h-1.35l-4.96 10.74zm4.3-2.99c.01.84.2 1.5.55 2 .35.49.89.74 1.6.74.72 0 1.25-.25 1.6-.74.35-.49.52-1.16.53-2-.01-.84-.18-1.5-.53-1.99-.35-.49-.88-.74-1.6-.74-.71 0-1.25.25-1.6.74-.36.49-.54 1.15-.55 1.99zm1.57 0c0-.23 0-.4.01-.52s.03-.27.06-.45.09-.3.17-.38.19-.12.33-.12c.09 0 .17.02.24.06.07.04.12.1.16.19.04.09.07.17.1.24s.04.18.05.32l.01.32v.69l-.01.32-.05.32-.1.24-.16.19-.24.06c-.14 0-.25-.04-.33-.12s-.14-.21-.17-.38c-.03-.18-.05-.33-.06-.45s-.01-.3-.01-.53z" />
                                                    </svg>
                                                </td>
                                                <td>
                                                    {e.wind.speed}
                                                </td>
                                                <td className="text-right">
                                                    {e.weather[0].description} <svg
                                                        viewBox="0 0 30 30"
                                                        fill="currentColor"
                                                        height="2em"
                                                        width="2em"
                                                    >
                                                        <path d="M1.56 16.9c0 .9.22 1.73.66 2.49s1.04 1.36 1.8 1.8c.76.44 1.58.66 2.47.66h10.83c.89 0 1.72-.22 2.48-.66.76-.44 1.37-1.04 1.81-1.8.44-.76.67-1.59.67-2.49 0-.66-.14-1.33-.42-2 .76-.92 1.14-2.03 1.14-3.3 0-.71-.14-1.39-.41-2.04-.27-.65-.65-1.2-1.12-1.67-.47-.47-1.02-.85-1.67-1.12-.65-.28-1.33-.41-2.04-.41-1.48 0-2.77.58-3.88 1.74-.77-.44-1.67-.66-2.7-.66-1.41 0-2.65.44-3.73 1.31a5.8 5.8 0 00-2.08 3.35c-1.12.26-2.03.83-2.74 1.73s-1.07 1.92-1.07 3.07zm1.71 0c0-.84.28-1.56.84-2.17.56-.61 1.26-.96 2.1-1.06l.5-.03c.12 0 .19-.06.19-.18l.07-.54c.14-1.08.61-1.99 1.41-2.71.8-.73 1.74-1.09 2.81-1.09 1.1 0 2.06.37 2.87 1.1a3.99 3.99 0 011.37 2.71l.07.58c.02.11.09.17.21.17h1.61c.88 0 1.64.32 2.28.96.64.64.96 1.39.96 2.27 0 .91-.32 1.68-.95 2.32-.63.64-1.4.96-2.28.96H6.49c-.88 0-1.63-.32-2.27-.97-.63-.65-.95-1.42-.95-2.32zm6.7-12.27c0 .24.08.45.24.63l.66.64c.25.19.46.27.64.25.21 0 .39-.09.55-.26s.24-.38.24-.62-.09-.44-.26-.59l-.59-.66a.888.888 0 00-.61-.24c-.24 0-.45.08-.62.25-.17.16-.25.36-.25.6zm5.34 4.43c.69-.67 1.51-1 2.45-1 .99 0 1.83.34 2.52 1.03s1.04 1.52 1.04 2.51c0 .62-.17 1.24-.51 1.84-.97-.96-2.13-1.44-3.49-1.44H17c-.25-1.09-.81-2.07-1.69-2.94zm1.63-5.28c0 .26.08.46.23.62s.35.23.59.23c.26 0 .46-.08.62-.23.16-.16.23-.36.23-.62V1.73c0-.24-.08-.43-.24-.59s-.36-.23-.61-.23c-.24 0-.43.08-.59.23s-.23.35-.23.59v2.05zm5.52 2.29c0 .26.07.46.22.62.21.16.42.24.62.24.18 0 .38-.08.59-.24l1.43-1.43c.16-.18.24-.39.24-.64 0-.24-.08-.44-.24-.6a.807.807 0 00-.59-.24c-.24 0-.43.08-.58.24l-1.47 1.43c-.15.19-.22.39-.22.62zm.79 11.84c0 .24.08.45.25.63l.65.63c.15.16.34.24.58.24s.44-.08.6-.25a.86.86 0 00.24-.62c0-.22-.08-.42-.24-.58l-.65-.65a.779.779 0 00-.57-.24c-.24 0-.44.08-.6.24-.17.16-.26.36-.26.6zm1.47-6.31c0 .23.09.42.26.58.16.16.37.24.61.24h2.04c.23 0 .42-.08.58-.23s.23-.35.23-.59-.08-.44-.23-.6-.35-.25-.58-.25h-2.04c-.24 0-.44.08-.61.25a.79.79 0 00-.26.6z" />
                                                    </svg>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </Table>
                                <CardFooter className="py-4">
                                    <nav aria-label="...">
                                        <Pagination
                                            className="pagination justify-content-end mb-0"
                                            listClassName="justify-content-end mb-0"
                                        >
                                            <PaginationItem className="disabled">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    tabIndex="-1"
                                                >
                                                    <i className="fas fa-angle-left" />
                                                    <span className="sr-only">Previous</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem className="active">
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Today
                                                </PaginationLink>
                                            </PaginationItem>
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    Next day <span className="sr-only">(current)</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                            {/* <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    3
                                                </PaginationLink>
                                            </PaginationItem> */}
                                            <PaginationItem>
                                                <PaginationLink
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                >
                                                    <i className="fas fa-angle-right" />
                                                    <span className="sr-only">Next</span>
                                                </PaginationLink>
                                            </PaginationItem>
                                        </Pagination>
                                    </nav>
                                </CardFooter>
                            </Card>
                        </div>
                    </Row>
                </ModalBody>
                <ModalFooter>
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default CustomModal;