import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"

const Loading = ({ height, fullscreen = false }: { height: number, fullscreen?: boolean }) => {
  const indicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div
      style={{
        height: height ? height : fullscreen ? "100vh" : "100%",
        width: fullscreen ? "100vw" : "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <Spin
        indicator={indicator}
      />
    </div>
  )
}

export default Loading