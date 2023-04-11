import xmlserializer from 'xmlserializer';
import { JSDOM } from 'jsdom';
import * as d3 from 'd3';
//
import { writeFileSync } from 'fs';
import open from 'open';
//
const dom = new JSDOM('<!DOCTYPE html><html><head></head><body></body></html>');
const { document } = dom.window;
// add the svg 
const svg = d3.select(document.body).append('svg').attr('width', 100).attr('height', 100);
svg.append('rect').attr('x', 10).attr('y', 10).attr('width', 80).attr('height', 80).attr('fill', 'yellow');

const xmlString = xmlserializer.serializeToString(document);
console.log(xmlString);
writeFileSync('index.html', xmlString);
open('index.html');