import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import clsx from 'clsx'

const Loading = ({ fullscreen = false }: { fullscreen?: boolean }) => {
  const indicator = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  return (
    <div
      className={clsx(
        "flex items-center justify-center h-full",
        fullscreen && "absolute inset-0"
      )}
    >
      <Spin
        indicator={indicator}
      />
    </div>
  )
}

export default Loading