interface EmailParams {
  url: string
  host: string
}

const emailText = ({ url, host }: EmailParams) => {
  return `Inicia sesion en ${host}\n${url}\n\n`
}

const emailHtml = ({ url }: EmailParams) => {
  return `<!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office"><head><!--[if gte mso 9]><xml><o:officedocumentsettings><o:allowpng><o:pixelsperinch>96</o:pixelsperinch></o:officedocumentsettings></xml><![endif]--><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="x-apple-disable-message-reformatting"><!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]--><title></title><style type="text/css">@media only screen and (min-width:620px){.u-row{width:600px!important}.u-row .u-col{vertical-align:top}.u-row .u-col-100{width:600px!important}}@media (max-width:620px){.u-row-container{max-width:100%!important;padding-left:0!important;padding-right:0!important}.u-row .u-col{min-width:320px!important;max-width:100%!important;display:block!important}.u-row{width:100%!important}.u-col{width:100%!important}.u-col>div{margin:0 auto}}body{margin:0;padding:0}table,td,tr{vertical-align:top;border-collapse:collapse}p{margin:0}.ie-container table,.mso-container table{table-layout:fixed}*{line-height:inherit}a[x-apple-data-detectors=true]{color:inherit!important;text-decoration:none!important}table,td{color:#000}#u_body a{color:#123ce6;text-decoration:underline}@media (max-width:480px){#u_content_image_3 .v-container-padding-padding{padding:20px 0 10px!important}#u_content_image_3 .v-src-width{width:auto!important}#u_content_image_3 .v-src-max-width{max-width:56%!important}#u_row_2.v-row-padding--vertical{padding-top:0!important;padding-bottom:0!important}#u_column_2 .v-col-padding{padding:0!important}#u_column_2 .v-col-border{border-top:0 solid transparent!important;border-left:10px solid #5b21b6!important;border-right:10px solid #5b21b6!important;border-bottom:0 solid transparent!important}#u_content_heading_1 .v-container-padding-padding{padding:30px 10px!important}#u_content_heading_1 .v-font-size{font-size:22px!important}#u_content_text_1 .v-container-padding-padding{padding:10px 5px 22px!important}#u_content_image_2 .v-src-width{width:auto!important}#u_content_image_2 .v-src-max-width{max-width:37%!important}#u_content_button_1 .v-container-padding-padding{padding:10px!important}#u_content_button_1 .v-size-width{width:87%!important}#u_content_button_1 .v-padding{padding:16px 13px!important}#u_row_5 .v-row-background-color{background-color:#5b21b6!important}#u_row_5.v-row-background-color{background-color:#5b21b6!important}#u_row_5.v-row-padding--vertical{padding-top:0!important;padding-bottom:0!important}#u_column_7 .v-col-border{border-top:0 solid transparent!important;border-left:10px solid #5b21b6!important;border-right:10px solid #5b21b6!important;border-bottom:60px solid #5b21b6!important}#u_content_text_12 .v-container-padding-padding{padding:10px 10px 38px!important}#u_content_text_12 .v-font-size{font-size:7px!important}}</style><!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Rubik:400,700&display=swap" rel="stylesheet" type="text/css"><!--<![endif]--></head><body class="clean-body u_body" style="margin:0;padding:0;-webkit-text-size-adjust:100%;background-color:#e7e7e7;color:#000"><!--[if IE]><div class="ie-container"><![endif]--><!--[if mso]><div class="mso-container"><![endif]--><table id="u_body" style="border-collapse:collapse;table-layout:fixed;border-spacing:0;mso-table-lspace:0;mso-table-rspace:0;vertical-align:top;min-width:320px;Margin:0 auto;background-color:#e7e7e7;width:100%" cellpadding="0" cellspacing="0"><tbody><tr style="vertical-align:top"><td style="word-break:break-word;border-collapse:collapse!important;vertical-align:top"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color:#e7e7e7"><![endif]--><div class="u-row-container v-row-padding--vertical v-row-background-color" style="padding:0;background-color:#5b21b6"><div class="u-row" style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-color" style="padding:0;background-color:#5b21b6" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="600" class="v-col-padding v-col-border" style="width:600px;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent" valign="top"><![endif]--><div class="u-col u-col-100" style="max-width:320px;min-width:600px;display:table-cell;vertical-align:top"><div style="height:100%;width:100%!important"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding v-col-border" style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:0 solid transparent;border-right:0 solid transparent;border-bottom:0 solid transparent"><!--<![endif]--><table id="u_content_image_3" style="font-family:'Open Sans',sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:30px 10px 15px;font-family:'Open Sans',sans-serif" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:0;padding-left:0" align="center"><img align="center" border="0" src="/email/image-1.png" alt="Logo" title="Logo" style="outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:43%;max-width:249.4px" width="249.4" class="v-src-width v-src-max-width"></td></tr></table></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div id="u_row_2" class="u-row-container v-row-padding--vertical v-row-background-color" style="padding:0;background-color:#5b21b6"><div class="u-row" style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-color" style="padding:0;background-color:#5b21b6" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="584" class="v-col-padding v-col-border" style="background-color:#fff;width:584px;padding:0;border-top:0 solid transparent;border-left:8px solid #5b21b6;border-right:8px solid #5b21b6;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_2" class="u-col u-col-100" style="max-width:320px;min-width:600px;display:table-cell;vertical-align:top"><div style="background-color:#fff;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding v-col-border" style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:8px solid #5b21b6;border-right:8px solid #5b21b6;border-bottom:0 solid transparent;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_heading_1" style="font-family:'Open Sans',sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:28px;font-family:'Open Sans',sans-serif" align="left"><h1 class="v-font-size" style="margin:0;color:#333;line-height:110%;text-align:center;word-wrap:break-word;font-family:Rubik,sans-serif;font-size:25px;font-weight:400"><div><div><div><div><div><div><div><div><div><div><div><div><strong>¡Hola, Ciao, Bonjour!</strong></div></div></div></div></div></div></div></div></div></div></div></div></h1></td></tr></tbody></table><table id="u_content_text_1" style="font-family:'Open Sans',sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 22px;font-family:'Open Sans',sans-serif" align="left"><div class="v-font-size" style="font-size:14px;color:#333;line-height:140%;text-align:center;word-wrap:break-word"><p style="line-height:140%"><span style="font-size:12px;line-height:16.8px"><span style="line-height:19.6px">Gracias por luchar contra la precariedad laboral</span><span style="line-height:19.6px">​</span></span></p><p style="line-height:140%"><strong><span style="font-size:12px;line-height:16.8px">Aquí tienes nuestra invitación</span></strong></p></div></td></tr></tbody></table><table id="u_content_image_2" style="font-family:'Open Sans',sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:34px 18px 18px;font-family:'Open Sans',sans-serif" align="left"><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding-right:0;padding-left:0" align="center"><img align="center" border="0" src="email/image-2.png" alt="Carta" title="Carta" style="outline:0;text-decoration:none;-ms-interpolation-mode:bicubic;clear:both;display:inline-block!important;border:none;height:auto;float:none;width:25%;max-width:141px" width="141" class="v-src-width v-src-max-width"></td></tr></table></td></tr></tbody></table><table id="u_content_button_1" style="font-family:'Open Sans',sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif" align="left"><!--[if mso]><style>.v-button{background:0 0!important}</style><![endif]--><div align="center"><!--[if mso]><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="${url}" style="height:49px;v-text-anchor:middle;width:271px" arcsize="8%" stroke="f" fillcolor="#c86b87"><w:anchorlock><center style="color:#fff"><![endif]--><a href="${url}" target="_blank" class="v-button v-size-width v-font-size" style="box-sizing:border-box;display:inline-block;text-decoration:none;-webkit-text-size-adjust:none;text-align:center;color:#fff;background-color:#c86b87;border-radius:4px;-webkit-border-radius:4px;-moz-border-radius:4px;width:48%;max-width:100%;overflow-wrap:break-word;word-break:break-word;word-wrap:break-word;mso-border-alt:none;font-size:14px"><span class="v-padding" style="display:block;padding:16px 20px;line-height:120%"><strong>ENTRAR A LA PLATAFORMA</strong></span></a><!--[if mso]><![endif]--></div></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><div id="u_row_5" class="u-row-container v-row-padding--vertical v-row-background-color" style="padding:0;background-color:#5b21b6"><div class="u-row" style="margin:0 auto;min-width:320px;max-width:600px;overflow-wrap:break-word;word-wrap:break-word;word-break:break-word;background-color:transparent"><div style="border-collapse:collapse;display:table;width:100%;height:100%;background-color:transparent"><!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td class="v-row-background-color" style="padding:0;background-color:#5b21b6" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px"><tr style="background-color:transparent"><![endif]--><!--[if (mso)|(IE)]><td align="center" width="584" class="v-col-padding v-col-border" style="background-color:#fff;width:584px;padding:0;border-top:0 solid transparent;border-left:8px solid #5b21b6;border-right:8px solid #5b21b6;border-bottom:100px solid #5b21b6;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0" valign="top"><![endif]--><div id="u_column_7" class="u-col u-col-100" style="max-width:320px;min-width:600px;display:table-cell;vertical-align:top"><div style="background-color:#fff;height:100%;width:100%!important;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--[if (!mso)&(!IE)]><!--><div class="v-col-padding v-col-border" style="box-sizing:border-box;height:100%;padding:0;border-top:0 solid transparent;border-left:8px solid #5b21b6;border-right:8px solid #5b21b6;border-bottom:100px solid #5b21b6;border-radius:0;-webkit-border-radius:0;-moz-border-radius:0"><!--<![endif]--><table id="u_content_text_12" style="font-family:'Open Sans',sans-serif" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0"><tbody><tr><td class="v-container-padding-padding" style="overflow-wrap:break-word;word-break:break-word;padding:10px 10px 37px;font-family:'Open Sans',sans-serif" align="left"><div class="v-font-size" style="font-size:10px;color:#4d4d4d;line-height:140%;text-align:center;word-wrap:break-word"><p style="line-height:140%">Este enlace es válido por tiempo limitado y solo puede ser usado una vez.</p><p style="line-height:140%">Si no has solicitado iniciar sesión, puedes ignorar este mensaje​</p></div></td></tr></tbody></table><!--[if (!mso)&(!IE)]><!--></div><!--<![endif]--></div></div><!--[if (mso)|(IE)]><![endif]--><!--[if (mso)|(IE)]><![endif]--></div></div></div><!--[if (mso)|(IE)]><![endif]--></td></tr></tbody></table><!--[if mso]><![endif]--><!--[if IE]><![endif]--></body></html>`
}

export { emailHtml, emailText }