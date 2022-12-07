import React from 'react';
import styled from '@emotion/styled';

import { changelog, ChangelogVersion } from "../../../data/changelog"
import logo from "../../../data/pictures/logo.png"

const ChangelogWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow-y: auto;
    > h1 {
        font-weight: 500;
    }
    > img {
        width: 180px;
        height: 180px;
    }
`;
const StyledVersion = styled.div`
    width: 600px;
    > p {
        margin-bottom: 10px;
    }
`;
const ChangeItem = styled.li`
    white-space: nowrap;
`;

export const Changelog = () => {
    return (
        <ChangelogWrapper>
            <img src={logo} alt="logo" />
            <h1>Changelog</h1>
            { changelog.map((version: ChangelogVersion) => <Version {...version} />)}
        </ChangelogWrapper>)
}

const Version = ({ version, description, changes }: ChangelogVersion) => {
    return <StyledVersion>
        <h2>v{version}</h2>
        {description && <p>{description}</p>}
        {changes && <p>Changes:</p>}
        {changes?.map((change) => <ChangeItem>{change}</ChangeItem>)}
    </StyledVersion>
}