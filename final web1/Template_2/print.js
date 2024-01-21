
					let query = location.search;
					console.log(query);//alert(query);
					query = query.substring(1,query.length);
					console.log(query);
					let querySplit = query.split("&");
					console.log(querySplit);
					let Pmpn = querySplit[0].split("=")[1];
					console.log("Pmpn = " + Pmpn);
					
					let Fname = querySplit[1].split("=")[1];
					console.log("Fname = " + Fname);
					let Lname = querySplit[2].split("=")[1];
					console.log("Lname = " + Lname);
					let TariRi = querySplit[3].split("=")[1];
					console.log("TariRi = " + TariRi);
					let Uzmomin = querySplit[4].split("=")[1] * 1;
					console.log("Uzmomin = " + Uzmomin);
					let uzmomax = querySplit[5].split("=")[1] * 1;
					console.log("uzmomax = " + uzmomax);
					let samxarimin = querySplit[6].split("=")[1] * 1;
					console.log("samxarimin = " + samxarimin);
					let samxarimax = querySplit[7].split("=")[1] * 1;
					console.log("samxarimax = " + samxarimax);
					let sadilimin = querySplit[8].split("=")[1] * 1;
					console.log("sadilimin = " + sadilimin);
					let sadilimax = querySplit[9].split("=")[1] * 1;
					console.log("sadilimax = " + sadilimax);
					let vaxSamimin = querySplit[10].split("=")[1] * 1;
					console.log("vaxSamimin = " + vaxSamimin);
					let vaxSamimax = querySplit[11].split("=")[1] * 1;
					console.log("vaxSamimax = " + vaxSamimax);

						document.getElementById("pmpn").value      = Pmpn;
						document.getElementById("fname").value     = Fname;
						document.getElementById("lname").value     = Lname;
						document.getElementById("tarigi").value    = TariRi;
						document.getElementById("uzmo_1").value    = Uzmomin;
						document.getElementById("uzmo_2").value    = uzmomax;
						document.getElementById("samxari_1").value = samxarimin;
						document.getElementById("samxari_2").value = samxarimax;
						document.getElementById("sadili_1").value  = sadilimin;
						document.getElementById("sadili_2").value  = sadilimax;
						document.getElementById("vaxSami_1").value = vaxSamimin;
						document.getElementById("vaxSami_2").value = vaxSamimax;
						
						let min_saSualo = (Uzmomin + samxarimin + sadilimin + vaxSamimin)/4;
						let max_saSualo = (uzmomax + samxarimax + sadilimax + vaxSamimax)/4;
						document.getElementById("saSualo").innerHTML = min_saSualo + " : " + max_saSualo;
