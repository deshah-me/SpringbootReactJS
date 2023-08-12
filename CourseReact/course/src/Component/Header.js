import { Card, CardBody } from "reactstrap";

function header({name="Deepak"}){  
    return (<>
        <Card className="bg-warning" padding="10px">
            <CardBody>
            <div className="text-center ml-3"><h1>Welcome {name} to the course project</h1></div>
            </CardBody>
        </Card>

        </>
    );
}

export default header;