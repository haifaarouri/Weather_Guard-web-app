import React, { useState } from 'react';
// reactstrap components
import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Button,
} from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import { useEffect } from 'react';

const Users = () => {

    const [usersList, setUsersList] = useState([])

    const fetchData = async () => {
        const response = await fetch("http://localhost:8082/SpringMVC/user")
        const data = await response.json()
        console.log(data);
        return data
    }

    return (
        <>
            <Header />
            {/* Page content */}
            <Button onClick={fetchData}>click</Button>
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Card tables</h3>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">Project</th>
                                        <th scope="col">Budget</th>
                                        <th scope="col">Status</th>
                                        <th scope="col">Users</th>
                                        <th scope="col">Completion</th>
                                        <th scope="col" />
                                    </tr>
                                </thead>
                                <tbody>
                                    {usersList.length > 0 && usersList.map((u, i) =>
                                        <tr key={i}>
                                            <th scope="row">
                                                <Media className="align-items-center">
                                                    <a
                                                        className="avatar rounded-circle mr-3"
                                                        href="#pablo"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                    </a>
                                                    <Media>
                                                        <span className="mb-0 text-sm">
                                                            u._id
                                                        </span>
                                                    </Media>
                                                </Media>
                                            </th>
                                            <td>$2,500 USD</td>
                                            <td>
                                                <Badge color="" className="badge-dot mr-4">
                                                    <i className="bg-warning" />
                                                    pending
                                                </Badge>
                                            </td>
                                            <td>
                                                <div className="avatar-group">
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip742438047"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip742438047"
                                                    >
                                                        Ryan Tompson
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip941738690"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip941738690"
                                                    >
                                                        Romina Hadid
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip804044742"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip804044742"
                                                    >
                                                        Alexander Smith
                                                    </UncontrolledTooltip>
                                                    <a
                                                        className="avatar avatar-sm"
                                                        href="#pablo"
                                                        id="tooltip996637554"
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                    </a>
                                                    <UncontrolledTooltip
                                                        delay={0}
                                                        target="tooltip996637554"
                                                    >
                                                        Jessica Doe
                                                    </UncontrolledTooltip>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="d-flex align-items-center">
                                                    <span className="mr-2">60%</span>
                                                    <div>
                                                        <Progress
                                                            max="100"
                                                            value="60"
                                                            barClassName="bg-danger"
                                                        />
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="text-right">
                                                <UncontrolledDropdown>
                                                    <DropdownToggle
                                                        className="btn-icon-only text-light"
                                                        href="#pablo"
                                                        role="button"
                                                        size="sm"
                                                        color=""
                                                        onClick={(e) => e.preventDefault()}
                                                    >
                                                        <i className="fas fa-ellipsis-v" />
                                                    </DropdownToggle>
                                                    <DropdownMenu className="dropdown-menu-arrow" right>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Another action
                                                        </DropdownItem>
                                                        <DropdownItem
                                                            href="#pablo"
                                                            onClick={(e) => e.preventDefault()}
                                                        >
                                                            Something else here
                                                        </DropdownItem>
                                                    </DropdownMenu>
                                                </UncontrolledDropdown>
                                            </td>
                                        </tr>)}
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
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                2 <span className="sr-only">(current)</span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) => e.preventDefault()}
                                            >
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
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
            </Container>
        </>
    );
};

export default Users;
