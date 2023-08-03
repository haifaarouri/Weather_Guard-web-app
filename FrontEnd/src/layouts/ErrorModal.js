import { Alert, Modal, ModalBody } from 'reactstrap';
import {
    Card,
    CardHeader,
    Row
} from "reactstrap";

const ErrorModal = ({ modal, toggle }) => {

    return (
        <div>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalBody>
                    <Row>
                        <div className="col">
                            <Card className="shadow">
                                <CardHeader className="border-0">
                                    <Alert style={{ color: "#f58733", backgroundColor: "white", borderColor: "#f58733" }}>
                                        Sorry, those details don't match. Check you've typed them correctly !
                                    </Alert>
                                </CardHeader>
                            </Card>
                        </div>
                    </Row>
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ErrorModal;