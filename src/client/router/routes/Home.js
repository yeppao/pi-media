import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

const Home = () => {

    return (
        <Row gutter={[8, 8]}>
            <Col span={12}>
                <h3>Yeah</h3>
            </Col>
            <Col span={12}>
                Content YO
            </Col>
        </Row>
    )
}

export default Home;