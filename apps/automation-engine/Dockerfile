# CIB seven Community Edition 2.2.0, Run distribution with the webclient
# (Tasklist, Cockpit, Admin, Modeler). Pinned by multi-arch index digest.
FROM cibseven/cibseven:run-2.2.0@sha256:8371c5ffbd713b6d520c524de14ff9346453864963c6a038a04923a8cccac4db

COPY --chown=camunda:camunda configuration/production.yml /camunda/configuration/production.yml

CMD ["./cibseven.sh", "--production"]
