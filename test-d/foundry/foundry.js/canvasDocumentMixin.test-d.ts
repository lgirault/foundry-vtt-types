import { expectAssignable, expectType } from 'tsd';
import * as data from '../../../src/foundry/common/data/data.mjs';

const doc = new AmbientLightDocument();

// Test the inheritance
expectType<string>(doc.documentName); // Document
expectType<string>(doc.uuid); // clientDocumentMixin
// TODO: change to <InstanceType<ObjectClass<AmbientLightDocument>> | null>  once the circular reference problem has been solved
expectType<PlaceableObject | null>(doc.object); // canvasDocumentMixin
expectType<boolean>(doc.isGlobal); // class itself

// Test the inheritance of static members
expectType<string>(AmbientLightDocument.documentName); // Document
expectType<typeof data.AmbientLightData>(AmbientLightDocument.schema); // Base-Document
expectType<Promise<AmbientLightDocument>>(AmbientLightDocument.createDialog()); // ClientDocumentMixin

// Test the props
// TODO: change to <InstanceType<ObjectClass<AmbientLightDocument>> | null>  once the circular reference problem has been solved
expectAssignable<PlaceableObject | null>(doc.object);
// TODO: change to <InstanceType<LayerClass<AmbientLightDocument>> | null>  once the circular reference problem has been solved
expectAssignable<CanvasLayer | null>(doc.layer);
expectType<boolean>(doc.rendered);
