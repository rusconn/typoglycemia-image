FROM node:16.16.0-bullseye-slim as deps
WORKDIR /home/node
COPY package.json yarn.lock ./
RUN yarn install --prod --frozen-lockfile

FROM node:16.16.0-bullseye-slim as builder
WORKDIR /home/node
# Node.jsをPID1で実行すると不都合がある
# 代わりのツールをPID1で動作させ、Node.jsはその子プロセスとするワークアラウンド
ENV TINI_VERSION v0.19.0
ADD https://github.com/krallin/tini/releases/download/${TINI_VERSION}/tini-static /tini
RUN chmod +x /tini
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
COPY . .
RUN yarn tsc

FROM gcr.io/distroless/nodejs:16
USER nonroot
ENV NODE_ENV production
WORKDIR /typoglycemia
COPY --from=deps --chown=nonroot:nonroot /home/node/node_modules ./node_modules
COPY --from=builder --chown=nonroot:nonroot /tini /tini
COPY --from=builder --chown=nonroot:nonroot /home/node/build/src src
ENTRYPOINT [ "/tini", "--", "/nodejs/bin/node", "src/index.js" ]
