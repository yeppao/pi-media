import React from 'react';
import { Breadcrumb } from 'antd';


const AppBreadcrumb = () => {
    return (
        <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Second</Breadcrumb.Item>
            <Breadcrumb.Item>Next</Breadcrumb.Item>
        </Breadcrumb>
    );
}

export default AppBreadcrumb;