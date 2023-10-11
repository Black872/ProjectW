FROM --platform=arm64 python3:10-apline AS builder

WORKDIR /src
COPY requirements.txt /src
RUN --mount=type=cache,target=/root/.cache/pip \
    pip3 install -r requirements.txt

COPY . .

CMD [ "python3", "server.py" ]

FROM builder as dev-envs

RUN <<EOF
apt update
apt add git
EOF

RUN <<EOF
addgroup -S docker
adduser -S --shell /bin/bash --ingroup docker vscode
EOF

COPY --from=gloursdocker/docker / / 

CMD [ "python3", "server.py" ]