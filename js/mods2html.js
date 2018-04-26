//javascript functions for mods2html.xsl

//toggle info
function showDIV(divClick,divShow,preHeading,text){
         var divClick = document.getElementById(divClick);
         var divShow = document.getElementById(divShow);
         if (divShow.style.display == 'block'){
                   divShow.style.display = 'none';
                   divClick.innerHTML = preHeading +text;
         }
         else if (divShow.style.display != 'block'){
                   divShow.style.display = 'block';
                   divClick.innerHTML = "Close " + text;
         }
}
function startSearch(){
	var q = document.getElementById('form').q.value;
	if (q == 'SEARCH HIDVL'){
        document.getElementById('form').q.value = '';
	}
        document.getElementById('form').submit();

}

function reQuery(start,startId,qry,qryId,fq,fqId){
    if (startId != ''){
    document.getElementById(startId).value=start;
    }
    document.getElementById(qryId).value=qry;
    if (fq != ''){
	var coll = document.getElementById(fqId);
	for(var i = 0; i < coll.length; i++){
		if (fq == coll.options[i].value){
			coll.options[i].selected=true;
		}
	}	
    }
    document.getElementById('form').submit();
}

function clrText(id){
document.getElementById(id).value='';
}


//changes source of quicktime player
function chgSrc(smil,obj){
         document.moviePlayer.SetURL(smil);
	 //  document.getElementById(obj.id).style.textDecoration = 'underline';
/*	 if(obj.id.indexOf('Low') != -1){
	   document.getElementById(obj.id).style.textDecoration = 'underline';
	   document.getElementById('HiRes').style.textDecoration = 'none';
	}
	else{
	   document.getElementById(obj.id).style.textDecoration = 'underline';
	   document.getElementById('LowRes').style.textDecoration = 'none';
	}
*/
}

//refineQuery
function refineQuery(name,value,q,fq,start,startId,qryId,fqId){
	var chkColl = /(collectionId\:.*)/;
	if (fq != ''){
                        var getParams = fq;
			var parseParam = "";
                        if (chkColl.test(fq)){
				if (getParams.match("AND")){
				var grabParams = getParams.split("AND");
				parseParam = grabParams[0].toString();	
			             for(var i=0; i < grabParams.length; i++){
					if (i > 0){
				        parseParam += ' AND ' + grabParams[i].toString();
					}
				     }
				getParams = parseParam;
				}
				else{
				   //fq = RegExp.$1;
				   getParams = RegExp.$1;
				}
			}
                        getParams = getParams.replace(/\%22/g,"\"");
                        getParams = getParams.replace(/\'/g,"\'");
                        document.getElementById('facets').value += getParams + ' AND ';
        }
                        document.getElementById('facets').value += name + ':' + '\"'+ value + '\"';
			fq="";
                        reQuery(start,startId,q,qryId,fq,fqId);

}

function grabFacets(facets,query,qryId,fqId,headerDiv){
printCollection(facets,fqId,headerDiv);

facets = facets.replace(/\:/g,"colonDelim");
facets = facets.replace(/\"/g,"quoteDelim");
facets = facets.replace(/\'/g,"aposDelim");
query = query.replace(/\'/g,"aposDelim");
if (facets.match("AND")){
	var getFacets = facets.split("AND");
	var facetStr="";
	for(var i=0; i < getFacets.length; i++){
	   var displayFacetStr = /.*?colonDelimquoteDelim(.*?)quot/;
	   var displayFacet = "";
           facetStr = getFacets[i].toString();
	   if (displayFacetStr.test(facetStr)){
		 displayFacet = RegExp.$1;
	         document.getElementById('filterResults').style.display='block';	
	document.getElementById('facetsSelected').innerHTML += "<a href=\"#\" onclick=\"broadenQuery('"+facets+"','"+facetStr+"','"+query+"','"+qryId+"')\"><span id=\"remove\">X</span></a>"+ displayFacet+"<br/>";
		
	   }
	}
	   
}
else{
	   var displayFacetStr = /.*?colonDelimquoteDelim(.*?)quot/;
	   var displayFacet = "";
	   if (displayFacetStr.test(facets)){
		 displayFacet = RegExp.$1;
	         document.getElementById('filterResults').style.display='block';	
	document.getElementById('facetsSelected').innerHTML += "<a href=\"#\" onclick=\"broadenQuery('"+facets+"','','"+query+"','"+qryId+"')\"><span id=\"remove\">X</span></a>"+ displayFacet+"<br/>";
	}
}
}

function broadenQuery(facets,removeFacet,query,qryId){
var queryFacets="";
    if (removeFacet != ''){
	facetArr = facets.split("AND");
	for(var i=0; i < facetArr.length; i++){
		    var facetStr = facetArr[i].toString();
		    if (removeFacet != facetStr){
			if (queryFacets == ""){
			   queryFacets = facetStr;
			}
			else{
		            queryFacets += ' AND ' + facetStr;
			}
		    }
	}
    queryFacets = queryFacets.replace(/colonDelim/g,":");
    queryFacets = queryFacets.replace(/quoteDelim/g,"\"");
    queryFacets = queryFacets.replace(/aposDelim/g,"\'");
    document.getElementById('facets').value = queryFacets;
    }
    query = query.replace(/aposDelim/g,"\'");
    reQuery('','',query,qryId,'','');

}

function queryContent(facets,qryId){
document.getElementById('facets').value = facets;
reQuery('','','',qryId,'','');
}

function printCollection(coll,fqId,collHeaderDiv){
var collStr = coll;
var collRegEx = /(collectionId.*?)\s/;
if(collRegEx.test(coll)){
collStr=RegExp.$1;
}
if (collStr.match("collectionId")){
	var collTitles = document.getElementById(fqId);
	var collTitle = collTitles.childNodes;
	for(var i = 0; i < collTitle.length; i++){
		if (collTitle[i].value == collStr){
			collStr = collTitle[i].text;
			document.getElementById(collHeaderDiv).innerHTML = "Collection: " + collStr
			return;

		}
	}

}


}
