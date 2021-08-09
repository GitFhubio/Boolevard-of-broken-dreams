<?php
$orders=[[
'id'=>1,
'customer_name'=>'peppe'
],['id'=>2,
'customer_name'=>'fabio']
];

$dishes=[[
'id'=>1,
'order_id'=>1,
'name'=>'margherita',
'price'=>'3'
],[
  'id'=>1,
  'order_id'=>1,
  'name'=>'margherita',
  'price'=>'3'
],
[
  'id'=>1,
  'order_id'=>1,
  'name'=>'margherita',
  'price'=>'3'
],
[
  'id'=>2,
  'order_id'=>1,
  'name'=>'marinara',
  'price'=>'5'
],
[
  'id'=>2,
  'order_id'=>1,
  'name'=>'marinara',
  'price'=>'5'
  ]];
  $neworders=[];
  foreach ($orders as $order) {
    $neworders[$order['id']]['info'] = $order;
   foreach($dishes as $dish){
     if($dish['order_id']==$order['id']){
      $neworders[$order['id']]['dishes'][] = $dish;
     }
   }
  };

// print_r($neworders);

$processedOrders=[];
foreach($neworders as $key=>$newOrder)
{
  $processedOrders[$key]['info'] = $order;
  
// masterpiece

$result = array_reduce($newOrder['dishes'], function($acc,$dish){

   if(!array_key_exists($dish['name'],$acc)){
     $acc[$dish['name']]=['quantita'=>1,'subtotale'=>$dish['price']];
   }
   else{
    $acc[$dish['name']]['quantita'] +=1;
    $acc[$dish['name']]['subtotale'] +=$dish['price'];
   }
  return $acc;

},[]);


$processedOrders[$key]['dishes'] = $result;

}
// print_r($neworders[1]['dishes']);
print_r($processedOrders);