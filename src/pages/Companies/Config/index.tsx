import React, {memo, useState} from "react";
import MenuConfig , {Geral} from "components/Companies/Config";
import {DefaultContentPage , Card} from "components/Content";
import {Row , Col} from "react-bootstrap";


function ConfigIndex(){

    const [content , setContent] = useState(<Geral/>)

    return (
        <>
            <DefaultContentPage>
                <Row>
                    <Col sm={3} className="mb-4">
                        <MenuConfig setContent={setContent}/>
                    </Col>

                    <Col sm={8}>
                        <Card border={true}>
                            {content}
                        </Card>
                    </Col>
                </Row>
            </DefaultContentPage>
        </>
    )
}

export default memo(ConfigIndex);