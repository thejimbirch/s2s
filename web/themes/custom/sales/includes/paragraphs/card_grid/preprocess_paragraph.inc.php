<?php

/**
 * @file
 * Preprocess Paragraphs for Card Grid Paragraph Type.
 */

if (isset($paragraph_values)) {
  // Heading.
  if (_sales_field_check($paragraph_values, 'field_heading')) {
    $variables['card_grid']['heading'] = $paragraph_values->get('field_heading')->getString();
  }
  // Description.
  if (_sales_field_check($paragraph_values, 'field_description')) {
    $variables['card_grid']['description'] = $paragraph_values->get('field_description')->view('full');
  }
  // Cards.
  $cards = [];
  $variables['card_grid']['cards'] = FALSE;
  if (_sales_field_check($paragraph_values, 'field_cards')) {
    foreach ($paragraph_values->field_cards as $card) {
      if ($card->entity->status->getString() == 1) {
        $cards[] = $card->target_id;
      }
    }
  }
  if (!empty($cards)) {
    $variables['card_grid']['cards'] = $cards;
  }
  // Call to Action.
  if (_sales_field_check($paragraph_values, 'field_call_to_action')) {
  }

  // Call To Actions.
  $variables['card_grid']['links'] = FALSE;
  if (_sales_field_check($paragraph_values, 'field_call_to_action')) {
    $variables['card_grid']['links'] = [];
    foreach ($paragraph_values->field_call_to_action as $link) {
      $variables['card_grid']['links'][] = _sales_link_helper($link);
    }
  }
}
