import './DiagramMaker.scss';
import React, { useEffect } from 'react';
import * as SRD from 'storm-react-diagrams';
import _ from 'lodash';
require("storm-react-diagrams/dist/style.min.css");

const DiagramMaker = ({ jsonObj }) => {
  const engine = new SRD.DiagramEngine();
  engine.installDefaultFactories();
  const model = new SRD.DiagramModel();

  const addArrayDataToModel = (data) => data.map((node) => model.addAll(node));

  const generateNode = (items) => items.map((item) => {
    return new SRD.DefaultNodeModel(`${item.id}`, 'rgb(58,59,107)');
  });

  const generateInPorts = (nodes) => nodes.map((node) => ({ [node.name]: node.addInPort('In') }))
    .reduce((acc, port) => _.merge(port, acc), {});
  const generateOutPorts = (nodes) => nodes.map((node) => ({ [node.name]: node.addOutPort('Out') }))
    .reduce((acc, port) => _.merge(port, acc), {});
  const generateInformationPorts = (nodes, extraInfo) => _.map(extraInfo, (info) => {
      _.forEach(info, (value, nodeKey) => {
        if (!_.isEmpty(value)) {
          const keys = Object.keys(value);
          keys.map((key) => _.isArray(value[key])
            ? value[key].map((inf) => nodes[nodeKey].addInPort(`${inf}`))
            : nodes[nodeKey].addInPort(`${value[key]}`)
          )
        }
      });
    });

  const createPorts = (data, nodes) => {
    const links = _.flatten(data.map((item) => item.map((obj) => ({ [obj.id]: obj.connectsTo }))));
    const inPorts = generateInPorts(nodes);
    const outPorts = generateOutPorts(nodes);
    const unions = links.map((link) => {
      const inPortKey = Object.keys(link)[0];
      return _.map(link, (value) => value && value.map((key) => key && inPorts[inPortKey].link(outPorts[key])));
    });
    return _.flattenDeep(unions).filter((link) => link);
  };

  const createNodes = (data) => {
    const nodes = _.flatten(data.map((itemsArray) => generateNode(itemsArray)));

    nodes.reduce((acc, node) => {
      node.setPosition(75 * acc, 200);
      return acc + 1;
    }, 1);

    return nodes;
  };

  const addExtraInfo = (data, nodes) => {
    const extraInfo = _.flatten(data.map((item) => item.map((obj) => { 
      const { id, type, connectsTo, ...rest } = obj;
      return ({ [obj.id]: rest });
    })));

    const referencedNodes = nodes.map((node) => ({ [node.name]: node }))
      .reduce((acc, port) => _.merge(port, acc), {});

    generateInformationPorts(referencedNodes, extraInfo);
  }

  const createDiagramFromJson = (json) => {
    const { actors, apps, services } = json;
    const dataArray = [actors, apps, services];
    const nodes = createNodes(dataArray)
    const links = createPorts(dataArray, nodes);
    addExtraInfo(dataArray, nodes);
    addArrayDataToModel(nodes);
    addArrayDataToModel(links);
    engine.setDiagramModel(model);
  };

  useEffect(() => {
    if (!_.isEmpty(jsonObj)) createDiagramFromJson(jsonObj);
  }, [jsonObj]);

  return (
    <SRD.DiagramWidget diagramEngine={engine} />
  );
};

export default DiagramMaker;
