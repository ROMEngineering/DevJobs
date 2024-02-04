import React from "react";
import { Skeleton, Space } from "antd";

const skeletonStyle = {
    width: "22rem",
    padding: 0,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "start",
    height: "auto",
    gap: "5px",
    marginLeft: "2rem",
};

const SkeletonUi = () => {
    return (
        <div style={skeletonStyle}>
            <Space>
                <Skeleton.Avatar
                    active={true}
                    size={"default"}
                    shape={"circle"}
                />
            </Space>
            <Space>
                <Skeleton.Button
                    active={true}
                    size={"small"}
                    shape={"default"}
                    block={false}
                />
                <Skeleton.Input active={true} size={"small"} />

                <Skeleton.Input active={true} size={"small"} />
            </Space>
            <Space>
                <Skeleton.Button
                    active={true}
                    size={"small"}
                    shape={"default"}
                    block={false}
                />
                <Skeleton.Input active={true} size={"small"} />

                <Skeleton.Input active={true} size={"small"} />
            </Space>
            <Space>
                <Skeleton.Button
                    active={true}
                    size={"small"}
                    shape={"default"}
                    block={false}
                />
                <Skeleton.Input active={true} size={"small"} />

                <Skeleton.Input active={true} size={"small"} />
            </Space>
        </div>
    );
};

export default SkeletonUi;
