import React from "react";
import styled from  "styled-components";

const DownloadButton = styled.a`
    display: inline-block;
    padding: 15px 30px;
    background-color: #333;
    color: #fff;
    text-decoration: none;
    font-size: 18px;;
    border-radius: 6px;
    margin-top: 20px;
    transition: background-color 0.3s;

    &:hover {
     background-color: #66ccff;
    }
`

const OpensourceSection: React.FC = () => (
    <div>
        <DownloadButton href="files for opensource" download>
            Download the files now
        </DownloadButton>
    </div>
);
export default OpensourceSection;