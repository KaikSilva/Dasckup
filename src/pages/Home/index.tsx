import React from "react";
import {Card, DefaultContentPage, DefaultTitlePage} from "components/Content";

const Home = () => {
    return (
        <DefaultContentPage>
            <Card border={true}>
                <DefaultTitlePage>
                    home
                </DefaultTitlePage>
            </Card>
        </DefaultContentPage>
    );
}

export default Home;


