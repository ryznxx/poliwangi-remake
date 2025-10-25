import { Helmet } from "react-helmet-async";
import type { IHead } from "../../types/head/head.types";
import { WebConfig } from "../../config/webconfig";
import type { ReactElement } from "react";

export default function HeadMeta({ title }: IHead): ReactElement {
  return (
    <Helmet>
      <title>
        {title} - {WebConfig.titleStart}
      </title>
      <meta name="description" content={`${title} | ${WebConfig.titleStart}`} />
    </Helmet>
  );
}
