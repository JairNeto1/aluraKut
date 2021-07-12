import MainGrid from "../src/components/MainGrid";
import Box from "../src/components/Box";

import React from "react";
import styled, { css } from "styled-components";
import NextLink from "next/link";

const BASE_URL = "http://alurakut.vercel.app/";
const v = "1";

function Link({ href, children, ...props }) {
  return (
    <NextLink href={href} passHref>
      <a {...props}>{children}</a>
    </NextLink>
  );
}
