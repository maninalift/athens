goog.provide('day8.re_frame_10x.db');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.utils.localstorage');
day8.re_frame_10x.db.init_db = (function day8$re_frame_10x$db$init_db(debug_QMARK_){
var panel_width_PERCENT_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("panel-width-ratio",0.35);
var show_panel_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-panel",true);
var selected_tab = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("selected-tab",new cljs.core.Keyword(null,"event","event",301435442));
var filter_items = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filter-items",cljs.core.PersistentVector.EMPTY);
var app_db_paths = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-paths",cljs.core.PersistentArrayMap.EMPTY));
var json_ml_paths = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-json-ml-expansions",cljs.core.PersistentHashSet.EMPTY);
var external_window_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window?",false);
var external_window_dimensions = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("external-window-dimensions",new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),(800),new cljs.core.Keyword(null,"height","height",1025178622),(800),new cljs.core.Keyword(null,"top","top",-1856271961),(0),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null));
var show_epoch_traces_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("show-epoch-traces?",true);
var using_trace_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("using-trace?",true);
var ignored_events = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("ignored-events",cljs.core.PersistentArrayMap.EMPTY);
var low_level_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("low-level-trace",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reagent","reagent",2131627322),true,new cljs.core.Keyword(null,"re-frame","re-frame",-1039473033),true], null));
var filtered_view_trace = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("filtered-view-trace",(function (){var id1 = cljs.core.random_uuid();
var id2 = cljs.core.random_uuid();
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id1,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.box",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.box","re-com.box",-858521688,null),new cljs.core.Keyword(null,"sort","sort",953465918),(0)], null),id2,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id2,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499),"re-com.input-text",new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Symbol(null,"re-com.input-text","re-com.input-text",-1695951110,null),new cljs.core.Keyword(null,"sort","sort",953465918),(1)], null)]);
})());
var num_epochs = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("retained-epochs",(25));
var follows_events_QMARK_ = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("app-db-follows-events?",true);
var categories = day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2("categories",new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword(null,"event","event",301435442),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
if(cljs.core.truth_(using_trace_QMARK_)){
var G__34412_34461 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","enable-tracing","global/enable-tracing",-1791988359)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34412_34461) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34412_34461));
} else {
}

var G__34413_34465 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),panel_width_PERCENT_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34413_34465) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34413_34465));

var G__34414_34467 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945),show_panel_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34414_34467) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34414_34467));

var G__34415_34469 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089),selected_tab], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34415_34469) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34415_34469));

var G__34416_34473 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-ignored-events","settings/set-ignored-events",-10379659),ignored_events], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34416_34473) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34416_34473));

var G__34418_34474 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-filtered-view-trace","settings/set-filtered-view-trace",-803299732),filtered_view_trace], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34418_34474) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34418_34474));

var G__34422_34476 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-low-level-trace","settings/set-low-level-trace",-664705158),low_level_trace], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34422_34476) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34422_34476));

var G__34424_34477 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","set-number-of-retained-epochs","settings/set-number-of-retained-epochs",-1910736736),num_epochs], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34424_34477) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34424_34477));

var G__34426_34478 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889),follows_events_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34426_34478) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34426_34478));

var G__34427_34480 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920),debug_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34427_34480) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34427_34480));

var G__34428_34484 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","external-window-dimensions","settings/external-window-dimensions",-501632461),external_window_dimensions], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34428_34484) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34428_34484));

if(cljs.core.truth_(external_window_QMARK_)){
var G__34429_34485 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","launch-external","global/launch-external",821773827)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34429_34485) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34429_34485));
} else {
}

var G__34430_34486 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347),filter_items], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34430_34486) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34430_34486));

var G__34431_34487 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","set-categories","traces/set-categories",-1873940666),categories], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34431_34487) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34431_34487));

var G__34433_34488 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","update-show-epoch-traces?","trace-panel/update-show-epoch-traces?",-1935503516),show_epoch_traces_QMARK_], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34433_34488) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34433_34488));

var G__34434_34489 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730),app_db_paths], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34434_34489) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34434_34489));

var G__34438_34490 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","set-json-ml-paths","app-db/set-json-ml-paths",582043654),json_ml_paths], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34438_34490) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34438_34490));

var G__34439_34491 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("global","add-unload-hook","global/add-unload-hook",1304719430)], null);
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34439_34491) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34439_34491));

var G__34440 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371)], null);
return (day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__34440) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.dispatch.call(null,G__34440));
});

//# sourceMappingURL=day8.re_frame_10x.db.js.map
